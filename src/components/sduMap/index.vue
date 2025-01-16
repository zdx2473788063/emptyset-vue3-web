<template>
    <div id="container1" class="map" :style="`height:${props.height}px`"></div>
</template>

<script setup>
    import AMapLoader from "@amap/amap-jsapi-loader";
    import { computed, onMounted, reactive, watch } from "vue";
    import { AMapKey, securityJsCode } from "@/config";
    const props = defineProps({
        latitude: {
            type: String,
            default: ""
        },
        longitude: {
            type: String,
            default: ""
        },
        height: {
            type: String,
            default: "200"
        }
    });

    const emits = defineEmits(["click"]);

    const state = reactive({
        map: null
    });

    const getLatLng = computed(() => {
        return {
            latitude: props.latitude,
            longitude: props.longitude
        };
    });

    watch(
        () => getLatLng.value,
        () => {
            initMap();
        },
        {
            immediate: true
        }
    );
    function initMap() {
        AMapLoader.load({
            key: AMapKey,
            version: "2.0",
            plugins: ["AMap.ToolBar", "AMap.ControlBar", "AMap.AutoComplete", "AMap.PlaceSearch", "AMap.Geocoder", "AMap.Marker"]
        })
            .then(AMap => {
                state.map = new AMap.Map("container1", {
                    viewMode: "3D", //  是否为3D地图模式
                    zoom: 15,
                    center: [props.latitude, props.longitude],
                    resizeEnable: true
                });

                setMapMarker();

                state.map.on("click", e => {
                    // 地图的点击事件
                    emits("click", e);
                });
            })
            .catch();
    }

    function setMapMarker() {
        if (props.longitude === "" && props.latitude === "") {
            return;
        }
        state.map.setFitView();
        state.marker = new AMap.Marker({
            map: state.map,
            position: [props.latitude, props.longitude]
        });
        // toGetAddress();
        state.map.setFitView();
        state.map.add(state.marker);
    }

    onMounted(() => {
        window._AMapSecurityConfig = {
            securityJsCode: securityJsCode
        };
    });
</script>

<style scoped>
    .map {
        width: 100%;
    }
</style>
