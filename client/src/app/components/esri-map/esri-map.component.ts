/*
  Copyright 2019 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter,
  OnDestroy
} from "@angular/core";
import { loadModules } from "esri-loader";
import esri = __esri; // Esri TypeScript Types

@Component({
  selector: "app-esri-map",
  templateUrl: "./esri-map.component.html",
  styleUrls: ["./esri-map.component.scss"]
})
export class EsriMapComponent implements OnInit, OnDestroy {
  @Output() mapLoadedEvent = new EventEmitter<boolean>();

  // The <div> where we will place the map
  @ViewChild("mapViewNode", { static: true }) private mapViewEl: ElementRef | undefined;

  /**
   * _zoom sets map zoom
   * _center sets map center
   * _basemap sets type of map
   * _loaded provides map loaded status
   */
  private _zoom = 10;
  private _center: Array<number> = [0.1278, 51.5074];
  private _basemap = "topo-vector";
  private _ground = "world-elevation";
  private _loaded = false;
  private _view: esri.SceneView = null as any;
  private _server = "http://localhost:5000/api/";
  private _json_options = {
    query: {
      f: "json"
    },
    responseType: "json"
  }

  get mapLoaded(): boolean {
    return this._loaded;
  }

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  @Input()
  set ground(ground: string) {
    this._ground = ground;
  }

  get ground(): string {
    return this._ground;
  }


  constructor(
  ) { }

  async initializeMap() {
    try {
      // Load the modules for the ArcGIS API for JavaScript
      const [EsriMap, EsriSceneView,
        EsriGeoJSONLayer, EsriGraphicLayer,
        EsriGraphic, EsriRequest] = await loadModules([
          "esri/Map", "esri/views/SceneView",
          "esri/layers/GeoJSONLayer", "esri/layers/GraphicsLayer",
          "esri/Graphic", "esri/request"
        ]);

      var createGraphic = function (data: { symbol: any; popupTemplate: any; }) {
        return new EsriGraphic({
          geometry: data,
          symbol: data.symbol,
          attributes: data,
          popupTemplate: data.popupTemplate
        });
      };


      

      //Get data for model
      // request json
      EsriRequest(this._server + 'face/bitexco_json', this._json_options).then(function (response: { data: any[]; }) {
        var graphicsLayer = new EsriGraphicLayer();
        /*console.log(response);*/
        response.data.forEach(function (data: any) {
          graphicsLayer.add(createGraphic(data));
        });
        map.add(graphicsLayer);
      });

      // geojson layer
      const bitexco = new EsriGeoJSONLayer({
        url: this._server + "body/bitexco_geojson",
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

      const bitexco2 = new EsriGeoJSONLayer({
        url: this._server + "body/bitexco_geojson",
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

      const bitexco_khung1 = new EsriGeoJSONLayer({
        url: this._server + "body/bitexcoKhung1_geojson",
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

      const bitexco_sanbay = new EsriGeoJSONLayer({
        url: this._server + "body/bitexcoSanBay_geojson",
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

      const bitexco_day = new EsriGeoJSONLayer({
        url: this._server + "body/bitexco_day.geojson",
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

      const bitexco_roof = new EsriGeoJSONLayer({
        url: this._server + "body/bitexco_roof.geojson",
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

      const bitexco_rooftop = new EsriGeoJSONLayer({
        url: this._server + "body/bitexco_rooftop.geojson",
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


      const bitexco_hanhchinh = new EsriGeoJSONLayer({
        url: this._server + "body/bitexcoHanhChinh_geojson",
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

      const bitexco_hanhchinh2 = new EsriGeoJSONLayer({
        url: this._server + "body/bitexcoHanhChinh1_geojson",
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

      const bitexco_hanhchinh_bao = new EsriGeoJSONLayer({
        url: this._server + "body/bitexcoHanhChinhBao_geojson",
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

      // Configure the Map
      const mapProperties: esri.MapProperties = {
        basemap: this._basemap,
        ground: this._ground,
        layers: [bitexco_hanhchinh_bao, bitexco, bitexco_sanbay, bitexco2, 
          bitexco_khung1, bitexco_hanhchinh, bitexco_hanhchinh2,
          bitexco_roof, bitexco_rooftop, bitexco_day]
      };

      const map: esri.Map = new EsriMap(mapProperties);

      // Initialize the SceneView
      const sceneViewProperties: esri.SceneViewProperties = {
        container: this.mapViewEl?.nativeElement,
        camera: {
          position: {
            x: 106.70558462670756,
            y: 10.76479345539322,
            z: 300
          },
          heading: 0,
          tilt: 75
        },
        zoom: this._zoom,
        map: map
      };

      this._view = new EsriSceneView(sceneViewProperties);
      this._view.popup.defaultPopupTemplateEnabled = true;
      await this._view.when();
      return this._view;
    } catch (error) {
      console.log("EsriLoader: ", error);
    }
  }

  ngOnInit() {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(sceneView => {
      // The map has been initialized
      console.log("sceneView ready: ", this._view.ready);
      this._loaded = this._view.ready;
      this.mapLoadedEvent.emit(true);
    });
  }

  ngOnDestroy() {
    if (this._view) {
      // destroy the map view
      this._view.container = null as any;
    }
  }
}