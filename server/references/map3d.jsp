<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
        <%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
            <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no" />
    <title>Map 3D</title>

    <style>
        html,
        body,
        #viewDiv {
            padding: 0;
            margin: 0;
            height: 100%;
            width: 100%;
        }
        
        #back {
            position: absolute;
            bottom: 20px;
        }
        
        #back i {
            background-image: url(app/public/img/back.svg);
            background-repeat: no-repeat;
            display: inline-block;
            width: 100px;
            height: 25px;
            padding-left: 25px;
            padding-top: 2px;
            margin: 10px;
            cursor: pointer;
            background-size: 20px;
        }
        
        #menu {
            padding: 0.8em;
            max-width: 300px;
        }
        
        #sliceContainer {
            width: 300px;
        }
        
        #sliceOptions {
            margin: 0 15px;
        }
        
        #sliceOptions>button {
            margin-bottom: 15px;
        }
        
        #sliceContainer {
             max-width: 300px; 
        }
        .esri-slice__container{
        width: 300px;
        }
    </style>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <link href="https://js.arcgis.com/4.19/esri/themes/light/main.css" rel="stylesheet" type="text/css" />
    <script src="https://js.arcgis.com/4.19/"></script>

    <script>
        require([
            "esri/Map",
            "esri/views/SceneView",
            "esri/layers/GeoJSONLayer",
            "esri/layers/SceneLayer",
            "esri/layers/GraphicsLayer",
            "esri/Graphic",
            "esri/request",
            "esri/widgets/Slice",
            "esri/widgets/Slice/SlicePlane",
            "esri/widgets/LayerList",
            "esri/core/Collection",
            "esri/widgets/Slice/SliceViewModel"
        ], function(Map, SceneView, GeoJSONLayer, SceneLayer,
            GraphicsLayer, Graphic, esriRequest, Slice,
            SlicePlane,
            LayerList,
            Collection, SliceViewModel) {
            var createGraphic = function(data) {
                return new Graphic({
                    geometry: data,
                    symbol: data.symbol,
                    attributes: data,
                    popupTemplate: data.popupTemplate
                });
            };

            const json_options = {
                query: {
                    f: "json"
                },
                responseType: "json"
            };
            // request json
            esriRequest('${pageContext.request.contextPath}/api/bitexco_json', json_options).then(function(response) {
                var graphicsLayer = new GraphicsLayer();
                /*console.log(response);*/
                response.data.forEach(function(data) {
                    graphicsLayer.add(createGraphic(data));
                });
                map.add(graphicsLayer);
            });
 
            // geojson layer
            const bitexco = new GeoJSONLayer({
                url: "${pageContext.request.contextPath}/api/bitexco.geojson",
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "polygon-3d",
                        symbolLayers: [{
                            type: "extrude",
                            size: 4,
                            material: {
                                color: "rgba(34,54,165,0.5)"
                            },
                            edges: {
                                type: "solid", // autocasts as new SolidEdges3D()
                                color: [50, 50, 50, 0.5]
                            },
                        }]
                    }
                }
            });

            const bitexco2 = new GeoJSONLayer({
                url: "${pageContext.request.contextPath}/api/bitexco.geojson",
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "polygon-3d",
                        symbolLayers: [{
                            type: "extrude",
                            size: 0.8,
                            material: {
                                color: "rgba(0,0,0,1)"
                            },
                            edges: {
                                type: "solid", // autocasts as new SolidEdges3D()
                                color: [50, 50, 50, 0.5]
                            },
                        }]
                    }
                }
            });
          
            const bitexco_khung1 = new GeoJSONLayer({
                url: "${pageContext.request.contextPath}/api/bitexco_khung1.geojson",
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "polygon-3d",
                        symbolLayers: [{
                            type: "extrude",
                            size: 0,
                            material: {
                                color: "#61C3A2"
                            },
                            edges: {
                                type: "solid", // autocasts as new SolidEdges3D()
                                color: [0, 0, 0, 1],
                                size: 30
                            },
                        }]
                    }
                }
            });

            const bitexco_sanbay = new GeoJSONLayer({
                url: "${pageContext.request.contextPath}/api/bitexco_sanbay.geojson",
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "polygon-3d",
                        symbolLayers: [{
                            type: "extrude",
                            size: 2,
                            material: {
                                color: "rgb(34,54,165)"
                            },
                            edges: {
                                type: "solid", // autocasts as new SolidEdges3D()
                                color: [50, 50, 50, 0.5]
                            },
                        }]
                    }
                }
            });


            const bitexco_hanhchinh = new GeoJSONLayer({
                url: "${pageContext.request.contextPath}/api/bitexco_hanhchinh_geojson",
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "polygon-3d",
                        symbolLayers: [{
                            type: "extrude",
                            size: 4,
                            material: {
                                color: "rgba(34,54,165,0.5)"
                            },
                            edges: {
                                type: "solid", // autocasts as new SolidEdges3D()
                                color: [50, 50, 50, 0.5]
                            },
                        }]
                    }
                }
            });
            
            const bitexco_hanhchinh2 = new GeoJSONLayer({
                url: "${pageContext.request.contextPath}/api/bitexco_hanhchinh1_geojson",
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "polygon-3d",
                        symbolLayers: [{
                            type: "extrude",
                            size: 0.8,
                            material: {
                                color: "rgba(0,0,0,1)"
                            },
                            edges: {
                                type: "solid", // autocasts as new SolidEdges3D()
                                color: [50, 50, 50, 0.5]
                            },
                        }]
                    }
                }
            });

            const bitexco_hanhchinh_bao = new GeoJSONLayer({
                url: "${pageContext.request.contextPath}/api/bitexco_hanhchinh_bao.geojson",
                renderer: {
                    type: "simple",
                    symbol: {
                        type: "polygon-3d",
                        symbolLayers: [{
                            type: "extrude",
                            size: 20,
                            material: {
                                color: "rgba(0,0,0,1)"
                            },
                            edges: {
                                type: "solid", // autocasts as new SolidEdges3D()
                                color: [50, 50, 50, 0.5]
                            },
                        }]
                    }
                }
            });

            const map = new Map({
                basemap: "topo-vector",
                ground: "world-elevation",
                layers: [bitexco_hanhchinh_bao, bitexco, bitexco_sanbay, bitexco2, bitexco_khung1, bitexco_hanhchinh, bitexco_hanhchinh2] //end layers
            });
           
            const view = new SceneView({
                container: "viewDiv",
                map: map,
                camera: {
                    position: [106.70558462670756, 10.76479345539322, 300],
                    heading: 0,
                    tilt: 75
                }
            });

            view.popup.defaultPopupTemplateEnabled = true;

            const slice = new Slice({
                view: view
            });
			
            // Add widget to the top-right corner of the view
            view.ui.add(slice, {
                position: "top-right"
            });

           	
            const excludedLayers = [];
            const sliceButton = document.getElementById("slice");
            const resetPlaneBtn = document.getElementById("resetPlaneBtn");
            const clearPlaneBtn = document.getElementById("clearPlaneBtn");
            const sliceOptions = document.getElementById("sliceOptions");
            const plane = new SlicePlane({
                position: {
                    latitude: 10.771644654409855,
                    longitude: 106.70418200024693,
                    z: 417.75
                },
                tilt: 32.62,
                width: 29,
                height: 29,
                heading: 0.46
            });

            let sliceWidget = null;
            let doorsLayer = null;
            let sliceTiltEnabled = true;

            view.ui.add("menu", "top-right");

            resetPlaneBtn.addEventListener("click", () => {
                document.getElementById("tiltEnabled").checked = true;
                sliceTiltEnabled = true;
                sliceWidget.viewModel.tiltEnabled = sliceTiltEnabled;
                sliceWidget.viewModel.shape = plane;
            });

            clearPlaneBtn.addEventListener("click", () => {
                // sliceWidget.viewModel.clear();
                slice.clear();
            });

            document
                .getElementById("tiltEnabled")
                .addEventListener("change", (event) => {
                    sliceTiltEnabled = event.target.checked;
                    sliceWidget.viewModel.tiltEnabled = sliceTiltEnabled;
                });

            document
                .getElementById("color")
                .addEventListener("change", (event) => {
                    if (event.target.checked) {
                        // A renderer can be set on a BuildingComponentSublayer
                        doorsLayer.renderer = {
                            type: "simple", // autocasts as new UniqueValueRenderer()
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
                                        color: "red"
                                    }
                                }]
                            }
                        };
                    } else {
                        doorsLayer.renderer = null;
                    }
                });

            // Add a layer list widget
            /* const layerList = new LayerList({
                view: view
            }); */

            // view.ui.empty("top-left");
            // view.ui.add(layerList, "top-left");


        });
    </script>
</head>

<body>

    <div id="viewDiv">
        <div id="menu" class="esri-widget">
            <div id="sliceContainer"></div>
            <div id="sliceOptions">
                <button class="esri-button esri-button--secondary" id="resetPlaneBtn" type="button" title="Reset slice plane">
          Reset slice plane
        </button>
                <button class="esri-button esri-button--secondary" id="clearPlaneBtn" type="button" title="Clear slice plane">
          Clear slice
        </button>
                
            </div>
        </div>
    </div>
    
    <a style="color: white; font-weight: bolder" href="${pageContext.request.contextPath}/feature"><div style="position: fixed; top: 215px; left: 8px; width:max-content; background-color: rgb(0, 20, 110); padding: 10px; border-radius:25px; border: 2px solid black">
   	<i class="fas fa-home"></i>
    </div></a>
</body>

</html>