package cn.thoughtworks.school.controller;

import cn.thoughtworks.school.dao.GrowthNote;
import io.restassured.RestAssured;
import org.junit.Test;
import org.junit.Before;
import org.junit.After;
import org.junit.runner.RunWith;
import org.springframework.boot.context.embedded.LocalServerPort;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static io.restassured.RestAssured.delete;
import static io.restassured.RestAssured.get;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;


@RunWith(SpringJUnit4ClassRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "classpath:db/test/beforeTestRun.sql")
@Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "classpath:db/test/afterTestRun.sql")
public class GrowthNoteControllerTest {

    @LocalServerPort
    private int port;

    @Before
    public void setup() {
        RestAssured.baseURI = "http://localhost";
        RestAssured.port = port;
    }

    @Test
    public void getByAuthor_when_userId_exist() {
        RestAssured.get("/api/users/1/growthNotes/my").then().body("content", hasItems("third content update", "first content update"));
    }

    @Test
    public void getByAuthor_When_userId_not_exist() {
        RestAssured.get("/api/users/3/growthNotes/my").then().body("size()", is(0));
    }

    @Test
    public void delete_when_rawId_exist() {
        given()
                .when()
                .delete("/api/users/1/growthNotes/my/3")
                .then()
                .assertThat()
                .statusCode(204);
    }

    @Test
    public void create() {
        GrowthNote growthNote = new GrowthNote();
        growthNote.setContent("I was created by test!");
        growthNote.setTitle("title");
        given()
                .contentType("application/json")
                .body(growthNote)
                .when()
                .post("/api/users/1/growthNotes/my")
                .then()
                .body("uri", equalTo("/api/users/1/growthNotes/my/10"))
                .assertThat()
                .statusCode(201);
    }

    @Test
    public void update_when_rawId_exist() {
        GrowthNote growthNote = new GrowthNote();
        growthNote.setContent("I was updated by test!");
        growthNote.setTitle("title");
        growthNote.setRawId(3);
        growthNote.setAuthor(1);
        given()
                .contentType("application/json")
                .body(growthNote)
                .when()
                .put("/api/users/1/growthNotes/my/3")
                .then()
                .assertThat()
                .statusCode(204);
    }

} 
