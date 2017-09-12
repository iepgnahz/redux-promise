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
@RequestMapping(value = "/api/users")
public class GrowthNoteController {

    @Autowired
    private GrowthNoteRepository growthNoteRepository;

    @Autowired
    EntityManager entityManager;


    @RequestMapping(value = "/{userId}/growthNotes/my", method = RequestMethod.GET)
    public ResponseEntity<List<GrowthNote>> getByAuthor(@PathVariable int userId) {
        List<GrowthNote> growthNoteList = growthNoteRepository.findByAuthor(userId);
        return new ResponseEntity<>(growthNoteList, HttpStatus.OK);
    }

    @RequestMapping(value = "/{userId}/growthNotes/my/{id}", method = RequestMethod.GET)
    public ResponseEntity<GrowthNote> getById(@PathVariable int id) {
        GrowthNote growthNote = growthNoteRepository.findOne(id);
        if (null == growthNote) {
            return new ResponseEntity<>(growthNote, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(growthNote, HttpStatus.OK);
    }

    @RequestMapping(value = "/{userId}/growthNotes/my/{rawId}", method = RequestMethod.DELETE)
    public ResponseEntity<Map<String, String>> delete(@PathVariable int userId, @PathVariable int rawId) {
        GrowthNote lastGrowthNote = growthNoteRepository.findByRawIdAndAuthor(userId, rawId);
        entityManager.detach(lastGrowthNote);
        lastGrowthNote.setOperationType(GrowthNote.OperationType.DELETE);
        lastGrowthNote.setId(null);
        lastGrowthNote = growthNoteRepository.save(lastGrowthNote);
        Map<String, String> body = new HashMap<>();
        body.put("uri", "/api/users/" + userId + "/growthNotes/" + lastGrowthNote.getId());
        return new ResponseEntity<>(body, HttpStatus.NO_CONTENT);
    }

    @RequestMapping(value = "/{userId}/growthNotes/my", method = RequestMethod.POST)
    public ResponseEntity<Map<String, String>> create(@PathVariable int userId, @RequestBody GrowthNote growthNote) {
        GrowthNote lastGrowthNote = growthNoteRepository.findLastGrowthNoteByAuthor(userId);
        growthNote.setRawId(lastGrowthNote.getRawId() + 1);
        growthNote.setOperationType(GrowthNote.OperationType.CREATE);
        growthNote.setAuthor(userId);
        growthNote = growthNoteRepository.save(growthNote);
        Map<String, String> body = new HashMap<>();
        body.put("uri", "/api/users/" + userId + "/growthNotes/" + growthNote.getId());
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{userId}/growthNotes/my/{rawId}", method = RequestMethod.PUT)
    public ResponseEntity<Map<String, String>> update(@PathVariable int userId, @RequestBody GrowthNote growthNote) {
        growthNote.setOperationType(GrowthNote.OperationType.UPDATE);
        growthNoteRepository.save(growthNote);
        Map<String, String> body = new HashMap<>();
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
