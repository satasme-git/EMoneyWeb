package satasme.promo.web.controller;

/**
 * Sample Java code for youtube.videos.insert
 * See instructions for running these code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#java
 */

import com.google.api.client.auth.oauth2.Credential;
import com.google.api.client.extensions.java6.auth.oauth2.AuthorizationCodeInstalledApp;
import com.google.api.client.extensions.jetty.auth.oauth2.LocalServerReceiver;
import com.google.api.client.googleapis.auth.oauth2.GoogleAuthorizationCodeFlow;
import com.google.api.client.googleapis.auth.oauth2.GoogleClientSecrets;
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;
import com.google.api.client.googleapis.json.GoogleJsonResponseException;
import com.google.api.client.http.InputStreamContent;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;

import com.google.api.services.youtube.YouTube;
import com.google.api.services.youtube.model.Thumbnail;
import com.google.api.services.youtube.model.ThumbnailDetails;
import com.google.api.services.youtube.model.Video;
import com.google.api.services.youtube.model.VideoSnippet;
import com.google.api.services.youtube.model.VideoStatus;

import satasme.promo.web.service.FilesStorageService;

import java.io.BufferedInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.security.GeneralSecurityException;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ytvideo")
public class YoutubeController {
	@Autowired
	private FilesStorageService storageService;

	private static final String CLIENT_SECRETS = "client_secret.json";
	private static final Collection<String> SCOPES = Arrays.asList("https://www.googleapis.com/auth/youtube.upload");

	private static final String APPLICATION_NAME = "API code samples";
	private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();

	/**
	 * Create an authorized Credential object.
	 *
	 * @return an authorized Credential object.
	 * @throws IOException
	 */
	public static Credential authorize(final NetHttpTransport httpTransport) throws IOException {
		// Load client secrets.
		InputStream in = YoutubeController.class.getResourceAsStream(CLIENT_SECRETS);
		GoogleClientSecrets clientSecrets = GoogleClientSecrets.load(JSON_FACTORY, new InputStreamReader(in));

		// Build flow and trigger user authorization request.
		GoogleAuthorizationCodeFlow flow = new GoogleAuthorizationCodeFlow.Builder(httpTransport, JSON_FACTORY,
				clientSecrets, SCOPES).build();
		Credential credential = new AuthorizationCodeInstalledApp(flow, new LocalServerReceiver()).authorize("user");
		return credential;
	}

	public static YouTube getService() throws GeneralSecurityException, IOException {
		final NetHttpTransport httpTransport = GoogleNetHttpTransport.newTrustedTransport();
		Credential credential = authorize(httpTransport);
		return new YouTube.Builder(httpTransport, JSON_FACTORY, credential).setApplicationName(APPLICATION_NAME)
				.build();
	}

	@GetMapping("/{uvid}")
	public void upload(@PathVariable(value = "uvid") String uvid) throws GeneralSecurityException, IOException, GoogleJsonResponseException {
		YouTube youtubeService = getService();
		Video video = new Video();

		VideoSnippet snippet = new VideoSnippet();
		snippet.setTitle("aaaaaaaaaaaaa");
		snippet.setDescription("description for testing purpose");
		video.setSnippet(snippet);
		
        VideoStatus status = new VideoStatus();
        status.setUploadStatus("uploaded");
        video.setStatus(status);

		Resource load = storageService.load("video 3.mp4", "70", "1hruc8cc0gshe");//this returns image as a resource file
		File myfile = load.getFile();
		InputStreamContent mediaContent = new InputStreamContent("application/octet-stream",
				new BufferedInputStream(new FileInputStream(myfile)));
		mediaContent.setLength(myfile.length());

		// Define and execute the API request
		YouTube.Videos.Insert request = youtubeService.videos().insert("snippet, status", video, mediaContent);
		Video response = request.execute();
	}
	
	@DeleteMapping("/{uvid}")
	public void deletevideo(@PathVariable(value = "uvid") String uvid) {
		System.out.println("aaaaaaaaaaaaaaaaaa");
	}
}
