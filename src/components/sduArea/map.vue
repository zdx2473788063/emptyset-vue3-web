<template>
    <sdu-dialog v-model="modelVisible" title="地图定位" width="1000">
        <div id="container" class="map"></div>
        <div class="search-box" v-if="!isDetail">
            <el-select
                v-model="address"
                clearable
                placeholder="请输入关键词"
                style="width: 400px"
                :remote-method="remoteMethod"
                filterable
                remote
                @change="currentSelect"
                class="one-text"
                size="default"
            >
                <el-option v-for="(item, index) in areaList" :key="index" :label="item.district + item.name" :value="item.district + item.name">
                    <span>{{ item.district }}</span> <span>{{ item.name }}</span>
                </el-option>
            </el-select>
        </div>
    </sdu-dialog>
</template>

<script setup>
    import { reactive, toRefs, ref, onMounted, nextTick, defineProps } from "vue";
    import AMapLoader from "@amap/amap-jsapi-loader";
    import { sduDialog } from "@/components";
    import { AMapKey, securityJsCode } from "@/config";
    defineOptions({
        name: "SduArea"
    });

    const props = defineProps({
        addressClick: {
            type: Function,
            required: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            default: () => {}
        },
        isDetail: {
            type: Boolean,
            default: false
        }
    });
    const modelVisible = ref(false);
    onMounted(() => {
        window._AMapSecurityConfig = {
            securityJsCode: securityJsCode
        };
    });

    const open = () => {
        state.form = {
            address: "",
            lng: "",
            lat: ""
        };
        state.address = "";
        modelVisible.value = true;
        initMap();
    };

    const close = () => {
        modelVisible.value = false;
    };
    const state = reactive({
        map: null,
        placeSearch: null,
        autoComplete: null,
        marker: null,
        form: {
            address: "",
            lng: "",
            lat: ""
        },
        areaList: [],
        address: ""
    });

    const { areaList, address } = toRefs(state);

    function initMap(arr) {
        AMapLoader.load({
            key: AMapKey,
            version: "2.0",
            plugins: ["AMap.ToolBar", "AMap.ControlBar", "AMap.AutoComplete", "AMap.PlaceSearch", "AMap.Geocoder", "AMap.Marker"]
        })
            .then(AMap => {
                state.map = new AMap.Map("container", {
                    viewMode: "3D", //  是否为3D地图模式
                    zoom: 15,
                    center: arr,
                    resizeEnable: true
                });
                // 地图放大缩小插件
                let toolBar = new AMap.ToolBar({
                    position: {
                        top: "120px",
                        right: "51px"
                    }
                });
                // 3D地图插件
                let controlBar = new AMap.ControlBar({
                    position: {
                        top: "20px",
                        right: "20px"
                    }
                });

                state.geoCoder = new AMap.Geocoder({
                    city: "320100", //城市设定，默认南京
                    radius: 100 //范围，默认：500
                });

                // 正向地理编码
                state.geocoder = new AMap.Geocoder({
                    city: state.address
                });

                state.autoComplete = new AMap.AutoComplete({ city: "全国" });

                state.map.on("click", e => {
                    if (props.isDetail) {
                        return;
                    }
                    // 点击地图事件
                    if (!e && !e.lnglat) {
                        return;
                    }
                    state.form.lng = e.lnglat.lng;
                    state.form.lat = e.lnglat.lat;
                    removeMarker(); // 先删除地图上标记点
                    setMapMarker(); // 在添加新的标记点
                });
                state.map.addControl(toolBar); // 添加右上角的放大缩小
                state.map.addControl(controlBar); // 添加右上角的放大缩小
            })
            .catch(e => {
                console.error(e); // 加载错误提示
            })
            .finally(() => {
                removeMarker();
                setMapMarker();
            });
    }

    function setMapMarker() {
        if (state.form.lng == "" && state.form.lat == "") {
            return;
        }
        state.map.setFitView();
        state.marker = new AMap.Marker({
            map: state.map,
            position: [state.form.lng, state.form.lat]
        });
        toGetAddress();
        state.map.setFitView();
        state.map.add(state.marker);
    }

    function removeMarker() {
        if (state.marker) {
            state.map.remove(state.marker);
        }
    }

    function toGetAddress() {
        let lnglat = [state.form.lng, state.form.lat];
        state.geoCoder.getAddress(lnglat, (status, result) => {
            if (status === "complete" && result.regeocode) {
                props.addressClick(result, state.form.lng, state.form.lat); // 返回位置信息以及经纬度
            }
        });
    }

    function remoteMethod(query) {
        if (query !== "") {
            setTimeout(() => {
                state.autoComplete.search(query, (status, result) => {
                    state.areaList = result.tips;
                });
            }, 500);
        } else {
            state.areaList = [];
        }
    }
    function currentSelect(val) {
        if (!val) {
            return;
        }
        toGetCoordinate(val);
    }

    function toGetCoordinate(address) {
        state.geocoder.getLocation(address, function (status, result) {
            console.log("11-22 result: ", result);
            if (status === "complete" && result.info === "OK") {
                initMap([result.geocodes[0].location.lng, result.geocodes[0].location.lat]);
                state.form.lng = result.geocodes[0].location.lng;
                state.form.lat = result.geocodes[0].location.lat;
                state.form.address = result.geocodes[0].formattedAddress;
            }
        });
        nextTick(function () {
            removeMarker();
            setMapMarker();
        });
    }

    function fixed(lng, lat) {
        state.form.address = "";
        state.address = "";
        modelVisible.value = true;
        state.form.lng = lng;
        state.form.lat = lat;
        initMap([lng, lat]);
    }

    // 暴露方法
    defineExpose({
        open,
        close,
        fixed,
        toGetCoordinate
    });
</script>

<style scoped lang="scss">
    .map {
        width: 100%;
        height: 400px;
    }

    .search-box {
        position: absolute;
        z-index: 9;
        top: 80px;
        left: 20px;

        ::v-deep(.el-select) {
            width: 320px;
            border-radius: 50px;
            overflow: hidden;

            .el-input__wrapper {
                border-radius: 50px;
            }
        }
    }
</style>
