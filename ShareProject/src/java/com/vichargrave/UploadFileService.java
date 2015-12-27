/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.vichargrave;


import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.TimeZone;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;

/**
 * REST Web Service
 *
 * @author jiaxwei
 */
@Path("file")
public class UploadFileService {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of UploadFileService
     */
    public UploadFileService() {
    }

    /**
     * Retrieves representation of an instance of com.vichargrave.UploadFileService
     * @return an instance of java.lang.String
     */
    @GET
    @Produces("application/xml")
    public String getXml() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    /**
     * PUT method for updating or creating an instance of UploadFileService
     * @param content representation for the resource
     * @return an HTTP response with content of the updated or created resource.
     */
    @PUT
    @Consumes("application/xml")
    public void putXml(String content) {
    }
    
    @POST
    @Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)
    public Response uploadFile(
            @FormDataParam("files") InputStream uploadedInputStream,
            @FormDataParam("files") FormDataContentDisposition fileDetail,
            @FormDataParam("path") String path) {
        String uploadedFileFS = "D:\\workspace\\ShareProject\\upload\\"; 
        String fileLocation = uploadedFileFS + fileDetail.getFileName();
        writeToFile(uploadedInputStream, fileLocation);
        String content = readFile(fileLocation);
//        String content2 = getStringFromInputStream(uploadedInputStream);
        String output = "File uploaded to : " + content;// + uploadedFileLocation;
        System.out.println(output);
        String res = "{\"msg\":\""+ output +"\"}";
        return Response.status(200).entity(res).build();
//        return this.buildResponse(res);

    }
    
        public String getStringFromInputStream(InputStream is) {
        BufferedReader br = null;
        StringBuilder sb = new StringBuilder();
        String line;
        try {
            br = new BufferedReader(new InputStreamReader(is));
            while ((line = br.readLine()) != null) {
                sb.append(line);
                sb.append("\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (br != null) {
                try {
                    br.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return sb.toString();

    }
//    public Response buildResponse(Object object) throws IOException {
//        return buildResponse(getObjectMapper(), object);
//    }
//    public ObjectMapper getObjectMapper() {
//        ObjectMapper mapper = new ObjectMapper();
//        DateFormat df = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
//        df.setTimeZone(TimeZone.getTimeZone("UTC"));
//        mapper.setDateFormat(df);
//        mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_NULL);
//        //mapper.setSerializationInclusion(JsonSerialize.Inclusion.NON_DEFAULT);
//        return mapper;
//    }
//    public Response buildResponse(ObjectMapper mapper, Object object) throws IOException {
//        return Response.ok(mapper.writeValueAsString(object)).header("Content-type",
//                                                                     MediaType.APPLICATION_JSON).build();
//        }
    // save uploaded file to new location
    private void writeToFile(InputStream uploadedInputStream,
            String uploadedFileLocation) {
        try {
            OutputStream out = new FileOutputStream(new File(
                    uploadedFileLocation));
            int read = 0;
            byte[] bytes = new byte[1024];

            out = new FileOutputStream(new File(uploadedFileLocation));
            while ((read = uploadedInputStream.read(bytes)) != -1) {
                System.out.println("write file.....");
                out.write(bytes, 0, read);
            }
            out.flush();
            out.close();
        } catch (IOException e) {

            e.printStackTrace();
        }
    }
    
    private String readFile(String path) {
        StringBuffer content = new StringBuffer();
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            String sCurrentLine;
            while ((sCurrentLine = br.readLine()) != null) {
                System.out.println(sCurrentLine);
                content.append(sCurrentLine);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }finally{
            return content.toString();
        }
    }
}
