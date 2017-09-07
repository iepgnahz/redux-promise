package cn.thoughtworks.school.service;

import cn.thoughtworks.school.dao.GrowthNote;
import cn.thoughtworks.school.repository.GrowthNoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GrowthNoteService {

    @Autowired
    GrowthNoteRepository growthNoteRepository;

    public GrowthNoteRepository getGrowthNoteRepository() {
        return growthNoteRepository;
    }

    public List<GrowthNote> getByAuthor(int author) {
        Map<Integer, GrowthNote> lastGrowthNote = new HashMap<>();
        List<GrowthNote> growthNoteList = growthNoteRepository.findByAuthor(author);
        for (GrowthNote growthNote : growthNoteList) {
            int currentRawId = growthNote.getRawId();
            if (lastGrowthNote.containsKey(currentRawId)) {
                if (lastGrowthNote.get(currentRawId).getCreateTime().compareTo(growthNote.getCreateTime()) < 0) {
                    lastGrowthNote.put(currentRawId, growthNote);
                }
            } else {
                lastGrowthNote.put(growthNote.getRawId(), growthNote);
            }
        }
        growthNoteList.clear();
        for (Map.Entry<Integer, GrowthNote> entry : lastGrowthNote.entrySet()) {
            if (entry.getValue().getOperationType() != GrowthNote.OperationType.DELETE) {
                growthNoteList.add(entry.getValue());
            }
        }

        return growthNoteList;
    }

    public Map<String, String> delete(int author, int rawId, GrowthNote.OperationType operationType) {

        GrowthNote lastGrowthNote = getLastGrowthNote(author, rawId);

        GrowthNote newGrowthNote = new GrowthNote();
        newGrowthNote.setCreateTime(lastGrowthNote.getCreateTime());
        newGrowthNote.setDate(lastGrowthNote.getDate());
        newGrowthNote.setAuthor(lastGrowthNote.getAuthor());
        newGrowthNote.setRawId(lastGrowthNote.getRawId());
        newGrowthNote.setTitle(lastGrowthNote.getTitle());
        newGrowthNote.setContent(lastGrowthNote.getContent());
        newGrowthNote.setOperationType(GrowthNote.OperationType.DELETE);

        newGrowthNote = growthNoteRepository.save(newGrowthNote);
        Map<String, String> body = new HashMap<>();
        body.put("uri", "/users/" + author + "/api/growthNotes/" + newGrowthNote.getId());
        return body;
    }

    public Map<String, String> create(GrowthNote growthNote, int author) {
        GrowthNote newGrowthNote = new GrowthNote();
        newGrowthNote.setCreateTime(growthNote.getCreateTime());
        newGrowthNote.setDate(growthNote.getDate());
        newGrowthNote.setAuthor(growthNote.getAuthor());
        newGrowthNote.setRawId(growthNote.getRawId());
        newGrowthNote.setTitle(growthNote.getTitle());
        newGrowthNote.setContent(growthNote.getContent());
        newGrowthNote.setOperationType(GrowthNote.OperationType.CREATE);

        newGrowthNote = growthNoteRepository.save(newGrowthNote);
        Map<String, String> body = new HashMap<>();
        body.put("uri", "/users/" + author + "/api/growthNotes/" + newGrowthNote.getId());
        return body;
    }

    public Map<String, String> update(GrowthNote updateGrowthNote, int author, int rawId) {
        GrowthNote lastGrowthNote = getLastGrowthNote(author, rawId);
        GrowthNote newGrowthNote = new GrowthNote();

        if (updateGrowthNote.getCreateTime() != null){
            newGrowthNote.setCreateTime(updateGrowthNote.getCreateTime());
        }else {
            newGrowthNote.setCreateTime(updateGrowthNote.getCreateTime());
        }

        if (updateGrowthNote.getDate() != null){
            newGrowthNote.setDate(updateGrowthNote.getDate());
        }else {
            newGrowthNote.setDate(updateGrowthNote.getDate());
        }

        if (updateGrowthNote.getTitle() != null){
            newGrowthNote.setTitle(updateGrowthNote.getTitle());
        }else {
            newGrowthNote.setTitle(updateGrowthNote.getTitle());
        }

        if (updateGrowthNote.getContent() != null){
            newGrowthNote.setContent(updateGrowthNote.getContent());
        }else {
            newGrowthNote.setContent(updateGrowthNote.getContent());
        }

        newGrowthNote.setAuthor(author);
        newGrowthNote.setRawId(rawId);
        newGrowthNote.setOperationType(GrowthNote.OperationType.UPDATE);


        newGrowthNote = growthNoteRepository.save(newGrowthNote);
        Map<String, String> body = new HashMap<>();
        body.put("uri", "/users/" + author + "/api/growthNotes/" + newGrowthNote.getId());
        return body;
    }

    private GrowthNote getLastGrowthNote(int author, int rawId) {
        List<GrowthNote> growthNoteList = growthNoteRepository.findByRawIdAndAuthor(rawId, author);
        GrowthNote lastGrowthNote = growthNoteList.get(0);
        for (GrowthNote growthNote : growthNoteList) {
            if (lastGrowthNote.getCreateTime().compareTo(growthNote.getCreateTime()) < 0) {
                lastGrowthNote = growthNote;
            }
        }
        return lastGrowthNote;
    }

}
