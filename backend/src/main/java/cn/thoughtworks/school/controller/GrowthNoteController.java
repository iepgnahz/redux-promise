package cn.thoughtworks.school.controller;


import cn.thoughtworks.school.dao.GrowthNote;
import cn.thoughtworks.school.repository.GrowthNoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/users")
public class GrowthNoteController {

    @Autowired
    private GrowthNoteRepository growthNoteRepository;

    @Autowired
    EntityManager entityManager;


    @RequestMapping(value = "/{userId}/api/growthNotes", method = RequestMethod.GET)
    public ResponseEntity<List<GrowthNote>> getByAuthor(@RequestParam("author") int author) {
        List<GrowthNote> growthNoteList = growthNoteRepository.findByAuthor(author);
        if (0 == growthNoteList.size()){
            return new ResponseEntity<>(growthNoteList, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(growthNoteList, HttpStatus.OK);
    }

    @RequestMapping(value = "/{userId}/api/growthNotes/{id}", method = RequestMethod.GET)
    public ResponseEntity<GrowthNote> getById(@PathVariable int id) {

        GrowthNote growthNote = growthNoteRepository.findOne(id);
        if (null == growthNote){
            return new ResponseEntity<>(growthNote, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(growthNote, HttpStatus.OK);
    }

    @RequestMapping(value = "/{userId}/api/growthNotes/{rawId}", method = RequestMethod.DELETE)
    public ResponseEntity<Map<String, String>> delete(@PathVariable int userId, @PathVariable int rawId) {
        GrowthNote lastGrowthNote = growthNoteRepository.findByRawIdAndAuthor(userId, rawId);
        entityManager.detach(lastGrowthNote);
        lastGrowthNote.setOperationType(GrowthNote.OperationType.DELETE);
        lastGrowthNote.setId(null);
        lastGrowthNote = growthNoteRepository.save(lastGrowthNote);
        Map<String, String> body = new HashMap<>();
        body.put("uri", "/users/" + userId + "/api/growthNotes/" + lastGrowthNote.getId());
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{userId}/api/growthNotes", method = RequestMethod.POST)
    public ResponseEntity<Map<String, String>> create(@PathVariable int userId,@RequestBody GrowthNote growthNote) {
        growthNote.setId(null);
        growthNote = growthNoteRepository.save(growthNote);
        Map<String, String> body = new HashMap<>();
        body.put("uri", "/users/" + userId + "/api/growthNotes/" + growthNote.getId());
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{userId}/api/growthNotes", method = RequestMethod.PUT)
    public ResponseEntity<Map<String, String>> update(@PathVariable int userId, @RequestBody GrowthNote growthNote) {
        growthNote.setId(null);
        growthNote = growthNoteRepository.save(growthNote);
        Map<String, String> body = new HashMap<>();
        body.put("uri", "/users/" + userId + "/api/growthNotes/" + growthNote.getId());
        return new ResponseEntity<>(body, HttpStatus.OK);
    }
}
