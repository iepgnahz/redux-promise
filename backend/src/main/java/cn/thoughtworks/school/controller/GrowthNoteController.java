package cn.thoughtworks.school.controller;


import cn.thoughtworks.school.dao.GrowthNote;
import cn.thoughtworks.school.repository.GrowthNoteRepository;
import cn.thoughtworks.school.service.GrowthNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/growthNote")
public class GrowthNoteController {

    @Autowired
    GrowthNoteService growthNoteService;
    @Autowired
    GrowthNoteRepository growthNoteRepository;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<GrowthNote>> getByAuthor(@RequestParam("author") int author) {
        List<GrowthNote> growthNoteList = growthNoteService.getByAuthor(author);
        if (0 == growthNoteList.size()){
            return new ResponseEntity<>(growthNoteList, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(growthNoteList, HttpStatus.OK);
    }

}
