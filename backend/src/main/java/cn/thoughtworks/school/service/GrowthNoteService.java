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

    Map<Integer, GrowthNote> lastGrowthNote = new HashMap<>();

    public List<GrowthNote> getByAuthor(int author) {
        List<GrowthNote> growthNoteList = growthNoteRepository.findByAuthor(author);
        for (GrowthNote growthNote : growthNoteList) {
            int currentRawId = growthNote.getRawId();
            if (lastGrowthNote.containsKey(currentRawId)){
                if (lastGrowthNote.get(currentRawId).getCreateTime().compareTo(growthNote.getCreateTime()) < 0){
                    lastGrowthNote.put(currentRawId, growthNote);
                }
            }
            else {
                lastGrowthNote.put(growthNote.getRawId(), growthNote);
            }
        }
        growthNoteList.clear();
        for (Map.Entry<Integer, GrowthNote> entry : lastGrowthNote.entrySet()) {
            if (entry.getValue().getOperationType() != GrowthNote.OperationType.DELETE){
                growthNoteList.add(entry.getValue());
            }
        }

        return growthNoteList;
    }
}
