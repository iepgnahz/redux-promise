package cn.thoughtworks.school.repository;

import cn.thoughtworks.school.dao.GrowthNote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GrowthNoteRepository extends JpaRepository<GrowthNote, Integer> {

    List<GrowthNote> findByAuthor(int author);

}
