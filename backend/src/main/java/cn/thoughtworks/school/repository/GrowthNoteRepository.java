package cn.thoughtworks.school.repository;

import cn.thoughtworks.school.dao.GrowthNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GrowthNoteRepository extends JpaRepository<GrowthNote, Integer> {

    @Query(value = "SELECT * FROM `growthNote` WHERE id IN " +
            "(SELECT MAX(id) FROM `growthNote` WHERE author = ?1 GROUP BY rawId) " +
            "AND operationType IN ('CREATE', 'UPDATE') ORDER BY rawId DESC ", nativeQuery = true)
    List<GrowthNote> findByAuthor(int author);

    @Query(value = "SELECT * FROM `growthNote` WHERE id IN " +
            "(SELECT MAX(id) AS id FROM `growthNote` WHERE author = ?1 AND rawId = ?2)", nativeQuery = true)
    GrowthNote findByRawIdAndAuthor(int author, int rawId);

    @Query(value = "SELECT * FROM `growthNote` WHERE id IN " +
            "(SELECT MAX(id) FROM `growthNote` WHERE author = ?1)", nativeQuery = true)
    GrowthNote findLastGrowthNoteByAuthor(int author);

}
