package cn.thoughtworks.school.controller;


import cn.thoughtworks.school.dao.GrowthNote;
import cn.thoughtworks.school.service.GrowthNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/users")
public class GrowthNoteController {

    @Autowired
    GrowthNoteService growthNoteService;


    @RequestMapping(value = "/{userId}/api/growthNotes", method = RequestMethod.GET)
    public ResponseEntity<List<GrowthNote>> getByAuthor(@RequestParam("author") int author) {
        List<GrowthNote> growthNoteList = growthNoteService.getByAuthor(author);
        if (0 == growthNoteList.size()){
            return new ResponseEntity<>(growthNoteList, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(growthNoteList, HttpStatus.OK);
    }

    @RequestMapping(value = "/{userId}/api/growthNotes/{id}", method = RequestMethod.GET)
    public ResponseEntity<GrowthNote> getById(@PathVariable int id) {
        GrowthNote growthNote = growthNoteService.getGrowthNoteRepository().findOne(id);
        if (null == growthNote){
            return new ResponseEntity<>(growthNote, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(growthNote, HttpStatus.OK);
    }

    @RequestMapping(value = "/{userId}/api/growthNotes/{rawId}", method = RequestMethod.DELETE)
    public ResponseEntity<Map<String, String>> delete(@PathVariable int userId, @PathVariable int rawId) {
        Map<String, String> body = growthNoteService.delete(userId, rawId, GrowthNote.OperationType.DELETE);
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{userId}/api/growthNotes", method = RequestMethod.POST)
    public ResponseEntity<Map<String, String>> create(@PathVariable int userId,@RequestBody GrowthNote growthNote) {
        Map<String, String> body = growthNoteService.create(growthNote, userId);
        return new ResponseEntity<>(body, HttpStatus.CREATED);
    }

    @RequestMapping(value = "/{userId}/api/growthNotes/{rawId}", method = RequestMethod.PUT)
    public ResponseEntity<Map<String, String>> update(@PathVariable int userId, @PathVariable int rawId, @RequestBody GrowthNote growthNote) {
        Map<String, String> body = growthNoteService.update(growthNote, rawId, userId);
        return new ResponseEntity<>(body, HttpStatus.OK);
    }
}
