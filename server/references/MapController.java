package com.buildingmap3d.controller;

import java.util.ArrayList;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.buildingmap3d.dao.Map3dDAO;
import com.buildingmap3d.entities.Body;
import com.buildingmap3d.entities.Face;
import com.buildingmap3d.entities.FaceNode;

@Controller
public class MapController {
	@RequestMapping("/map")
	public String showPage() {
		return "map3d";
	}

	@SuppressWarnings("unchecked")
	@GetMapping("/api/bitexco_json")
	@ResponseBody
	public List<JSONObject> getBitexco9() throws ParseException {
		Map3dDAO mapDao = new Map3dDAO();
		List<JSONObject> jsonList = new ArrayList<>();
		for (int i = 1; i <= 46; i++) {
			JSONObject json = new JSONObject();
			List<FaceNode> faceNodeList = new ArrayList<FaceNode>();
			faceNodeList = mapDao.getFaceNodeList(i);
			List<JSONArray> list = new ArrayList<JSONArray>();
			for (FaceNode faceNode : faceNodeList) {
				JSONArray JSONArrayCoord = new JSONArray();
				JSONArrayCoord.add(0, faceNode.getFaceNodePK().getNode().getX());
				JSONArrayCoord.add(1, faceNode.getFaceNodePK().getNode().getY());
				JSONArrayCoord.add(2, faceNode.getFaceNodePK().getNode().getZ());
				list.add(JSONArrayCoord);
			}
			Face face = mapDao.getFaceList(i);
			if (face.getFaceType().equals("polygon")) {
				json.put("type", "polygon");
				json.put("rings", list);
			} else {
				json.put("type", "polyline");
				json.put("paths", list);
			}
			String s = face.getFaceSymbolRenderer();
			JSONParser parser = new JSONParser();
			JSONObject ob = (JSONObject) parser.parse(s);
			json.put("symbol", ob);
			jsonList.add(json);
		}
		for (int i = 166; i <= 197; i++) {
			JSONObject json = new JSONObject();
			List<FaceNode> faceNodeList = new ArrayList<FaceNode>();
			faceNodeList = mapDao.getFaceNodeList(i);
			List<JSONArray> list = new ArrayList<JSONArray>();
			for (FaceNode faceNode : faceNodeList) {
				JSONArray JSONArrayCoord = new JSONArray();
				JSONArrayCoord.add(0, faceNode.getFaceNodePK().getNode().getX());
				JSONArrayCoord.add(1, faceNode.getFaceNodePK().getNode().getY());
				JSONArrayCoord.add(2, faceNode.getFaceNodePK().getNode().getZ());
				list.add(JSONArrayCoord);
			}
			Face face = mapDao.getFaceList(i);
			if (face.getFaceType().equals("polygon")) {
				json.put("type", "polygon");
				json.put("rings", list);
			} else {
				json.put("type", "polyline");
				json.put("paths", list);
			}
			String s = face.getFaceSymbolRenderer();
			JSONParser parser = new JSONParser();
			JSONObject ob = (JSONObject) parser.parse(s);
			json.put("symbol", ob);
			jsonList.add(json);
		}
		return jsonList;
	}

	@SuppressWarnings("unchecked")
	@GetMapping("/api/bitexco.geojson")
	@ResponseBody
	public JSONObject getBitexcoGeoJson() throws ParseException {
		Map3dDAO mapDao = new Map3dDAO();
		Body body = mapDao.getBodyList(1);
		JSONObject featureCollection = new JSONObject();
		JSONArray features=new JSONArray();
		for (int i = 97; i <= 165; i++) {
			JSONArray coordinates = new JSONArray();
			List<FaceNode> faceNodeList = new ArrayList<FaceNode>();
			faceNodeList = mapDao.getFaceNodeList(i);
			List<JSONArray> list = new ArrayList<JSONArray>();
			for (FaceNode faceNode : faceNodeList) {
				JSONArray JSONArrayCoord = new JSONArray();
				JSONArrayCoord.add(0, faceNode.getFaceNodePK().getNode().getX());
				JSONArrayCoord.add(1, faceNode.getFaceNodePK().getNode().getY());
				JSONArrayCoord.add(2, faceNode.getFaceNodePK().getNode().getZ());
				list.add(JSONArrayCoord);
			}
			coordinates.add(list);
			JSONObject geometry=new JSONObject();
			geometry.put("type", "Polygon");
			geometry.put("coordinates", coordinates);
			
			JSONObject properties = new JSONObject();
			int a = i - 97;
			properties.put("Building name", "Tầng " + a + "Bitexco Financial");
			properties.put("Height", body.getBodyHeight());
			properties.put("color", body.getBodyColor());

			JSONObject feature=new JSONObject();
			feature.put("type", "Feature");
			feature.put("properties", properties);
			feature.put("geometry", geometry);
			
			features.add(feature);
		}
		featureCollection.put("features", features);
		featureCollection.put("type", "FeatureCollection");
		return featureCollection;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/api/bitexco_khung1.geojson")
	@ResponseBody
	public JSONObject getBitexcoGeoJson2() throws ParseException {
		Map3dDAO mapDao = new Map3dDAO();
		Body body = mapDao.getBodyList(1);
		JSONObject featureCollection = new JSONObject();
		JSONArray features=new JSONArray();
		for (int i = 80; i <= 95; i++) {
			JSONArray coordinates = new JSONArray();
			List<FaceNode> faceNodeList = new ArrayList<FaceNode>();
			faceNodeList = mapDao.getFaceNodeList(i);
			List<JSONArray> list = new ArrayList<JSONArray>();
			for (FaceNode faceNode : faceNodeList) {
				JSONArray JSONArrayCoord = new JSONArray();
				JSONArrayCoord.add(0, faceNode.getFaceNodePK().getNode().getX());
				JSONArrayCoord.add(1, faceNode.getFaceNodePK().getNode().getY());
				JSONArrayCoord.add(2, faceNode.getFaceNodePK().getNode().getZ());
				list.add(JSONArrayCoord);
			}
			coordinates.add(list);
			JSONObject geometry=new JSONObject();
			geometry.put("type", "Polygon");
			geometry.put("coordinates", coordinates);
			
			JSONObject properties = new JSONObject();
			int a = i - 97;
			properties.put("Name", "Khung Bitexco Financial");
			properties.put("Height", body.getBodyHeight());
			properties.put("color", body.getBodyColor());

			JSONObject feature=new JSONObject();
			feature.put("type", "Feature");
			feature.put("properties", properties);
			feature.put("geometry", geometry);
			
			features.add(feature);
		}
		featureCollection.put("features", features);
		featureCollection.put("type", "FeatureCollection");
		return featureCollection;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/api/bitexco_hanhchinh1_geojson")
	@ResponseBody
	public JSONObject getBitexcoGeoJson3() throws ParseException {
		Map3dDAO mapDao = new Map3dDAO();
		Body body = mapDao.getBodyList(1);
		JSONObject featureCollection = new JSONObject();
		JSONArray features=new JSONArray();
		for (int i = 67; i <= 78; i++) {
			JSONArray coordinates = new JSONArray();
			List<FaceNode> faceNodeList = new ArrayList<FaceNode>();
			faceNodeList = mapDao.getFaceNodeList(i);
			List<JSONArray> list = new ArrayList<JSONArray>();
			for (FaceNode faceNode : faceNodeList) {
				JSONArray JSONArrayCoord = new JSONArray();
				JSONArrayCoord.add(0, faceNode.getFaceNodePK().getNode().getX());
				JSONArrayCoord.add(1, faceNode.getFaceNodePK().getNode().getY());
				JSONArrayCoord.add(2, faceNode.getFaceNodePK().getNode().getZ());
				list.add(JSONArrayCoord);
			}
			coordinates.add(list);
			JSONObject geometry=new JSONObject();
			geometry.put("type", "Polygon");
			geometry.put("coordinates", coordinates);
			
			JSONObject properties = new JSONObject();
			int a = i - 97;
			properties.put("Name", "Tòa Hành Chính Bitexco Financial");
			properties.put("Height", body.getBodyHeight());
			properties.put("color", body.getBodyColor());

			JSONObject feature=new JSONObject();
			feature.put("type", "Feature");
			feature.put("properties", properties);
			feature.put("geometry", geometry);
			
			features.add(feature);
		}
		featureCollection.put("features", features);
		featureCollection.put("type", "FeatureCollection");
		return featureCollection;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/api/bitexco_hanhchinh_geojson")
	@ResponseBody
	public JSONObject getBitexcoGeoJson4() throws ParseException {
		Map3dDAO mapDao = new Map3dDAO();
		Body body = mapDao.getBodyList(1);
		JSONObject featureCollection = new JSONObject();
		JSONArray features=new JSONArray();
		for (int i = 49; i <= 66; i++) {
			JSONArray coordinates = new JSONArray();
			List<FaceNode> faceNodeList = new ArrayList<FaceNode>();
			faceNodeList = mapDao.getFaceNodeList(i);
			List<JSONArray> list = new ArrayList<JSONArray>();
			for (FaceNode faceNode : faceNodeList) {
				JSONArray JSONArrayCoord = new JSONArray();
				JSONArrayCoord.add(0, faceNode.getFaceNodePK().getNode().getX());
				JSONArrayCoord.add(1, faceNode.getFaceNodePK().getNode().getY());
				JSONArrayCoord.add(2, faceNode.getFaceNodePK().getNode().getZ());
				list.add(JSONArrayCoord);
			}
			coordinates.add(list);
			JSONObject geometry=new JSONObject();
			geometry.put("type", "Polygon");
			geometry.put("coordinates", coordinates);
			
			JSONObject properties = new JSONObject();
			int a = i - 97;
			properties.put("Name", "Tòa Hành Chính Bitexco Financial");
			properties.put("Height", body.getBodyHeight());
			properties.put("color", body.getBodyColor());

			JSONObject feature=new JSONObject();
			feature.put("type", "Feature");
			feature.put("properties", properties);
			feature.put("geometry", geometry);
			
			features.add(feature);
		}
		featureCollection.put("features", features);
		featureCollection.put("type", "FeatureCollection");
		return featureCollection;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/api/bitexco_sanbay.geojson")
	@ResponseBody
	public JSONObject getBitexcoGeoJson5() throws ParseException {
		Map3dDAO mapDao = new Map3dDAO();
		Body body = mapDao.getBodyList(1);
		JSONObject featureCollection = new JSONObject();
		JSONArray features=new JSONArray();
		for (int i = 96; i <= 96; i++) {
			JSONArray coordinates = new JSONArray();
			List<FaceNode> faceNodeList = new ArrayList<FaceNode>();
			faceNodeList = mapDao.getFaceNodeList(i);
			List<JSONArray> list = new ArrayList<JSONArray>();
			for (FaceNode faceNode : faceNodeList) {
				JSONArray JSONArrayCoord = new JSONArray();
				JSONArrayCoord.add(0, faceNode.getFaceNodePK().getNode().getX());
				JSONArrayCoord.add(1, faceNode.getFaceNodePK().getNode().getY());
				JSONArrayCoord.add(2, faceNode.getFaceNodePK().getNode().getZ());
				list.add(JSONArrayCoord);
			}
			coordinates.add(list);
			JSONObject geometry=new JSONObject();
			geometry.put("type", "Polygon");
			geometry.put("coordinates", coordinates);
			
			JSONObject properties = new JSONObject();
			int a = i - 97;
			properties.put("Name", "Tòa Hành Chính Bitexco Financial");
			properties.put("Height", body.getBodyHeight());
			properties.put("color", body.getBodyColor());

			JSONObject feature=new JSONObject();
			feature.put("type", "Feature");
			feature.put("properties", properties);
			feature.put("geometry", geometry);
			
			features.add(feature);
		}
		featureCollection.put("features", features);
		featureCollection.put("type", "FeatureCollection");
		return featureCollection;
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping("/api/bitexco_hanhchinh_bao.geojson")
	@ResponseBody
	public JSONObject getBitexcoGeoJson6() throws ParseException {
		Map3dDAO mapDao = new Map3dDAO();
		Body body = mapDao.getBodyList(1);
		JSONObject featureCollection = new JSONObject();
		JSONArray features=new JSONArray();
		for (int i = 47; i <= 48; i++) {
			JSONArray coordinates = new JSONArray();
			List<FaceNode> faceNodeList = new ArrayList<FaceNode>();
			faceNodeList = mapDao.getFaceNodeList(i);
			List<JSONArray> list = new ArrayList<JSONArray>();
			for (FaceNode faceNode : faceNodeList) {
				JSONArray JSONArrayCoord = new JSONArray();
				JSONArrayCoord.add(0, faceNode.getFaceNodePK().getNode().getX());
				JSONArrayCoord.add(1, faceNode.getFaceNodePK().getNode().getY());
				JSONArrayCoord.add(2, faceNode.getFaceNodePK().getNode().getZ());
				list.add(JSONArrayCoord);
			}
			coordinates.add(list);
			JSONObject geometry=new JSONObject();
			geometry.put("type", "Polygon");
			geometry.put("coordinates", coordinates);
			
			JSONObject properties = new JSONObject();
			int a = i - 97;
			properties.put("Name", "Tòa Hành Chính Bitexco Financial");
			properties.put("Height", body.getBodyHeight());
			properties.put("color", body.getBodyColor());

			JSONObject feature=new JSONObject();
			feature.put("type", "Feature");
			feature.put("properties", properties);
			feature.put("geometry", geometry);
			
			features.add(feature);
		}
		featureCollection.put("features", features);
		featureCollection.put("type", "FeatureCollection");
		return featureCollection;
	}
}
