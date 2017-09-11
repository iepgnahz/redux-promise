package cn.thoughtworks.school.repository;

import cn.thoughtworks.school.dao.GrowthNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GrowthNoteRepository extends JpaRepository<GrowthNote, Integer> {

    @Query(value = "select * from `growthNote` where id in " +
            "(select max(id) from `growthNote` where author = ?1 group by rawId) " +
            "and operationType in ('CREATE', 'UPDATE') order by rawId DESC ", nativeQuery = true)
    List<GrowthNote> findByAuthor(int author);

    @Query(value = "select * from `growthNote` where id in " +
            "(select max(id) as id from `growthNote` where author = ?1 and rawId = ?2)", nativeQuery = true)
    GrowthNote findByRawIdAndAuthor(int author, int rawId);

    @Query(value = "select * from `growthNote` where id in " +
            "(select max(id) from `growthNote` where author = ?1)", nativeQuery = true)
    GrowthNote findLastGrowthNoteByAuthor(int author);

}
