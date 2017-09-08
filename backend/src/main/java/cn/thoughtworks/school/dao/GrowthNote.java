package cn.thoughtworks.school.dao;

import javax.persistence.*;

@Entity
@Table(name = "growthNote")
public class GrowthNote {

    public enum OperationType{CREATE, UPDATE, DELETE}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private Integer id;

    @Column
    private String createTime;

    @Column
    private String date;

    @Column
    private String content;

    @Column
    private Integer rawId;

    @Column
    private Integer author;

    @Column
    private String title;

    @Column
    @Enumerated(EnumType.STRING)
    private OperationType operationType;

    public OperationType getOperationType() {
        return operationType;
    }

    public void setOperationType(OperationType operationType) {
        this.operationType = operationType;
    }


    public void setCreateTime(String createTime) {
        this.createTime = createTime;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public void setRawId(Integer rawId) {
        this.rawId = rawId;
    }

    public void setAuthor(Integer author) {
        this.author = author;
    }

    public void setTitle(String titile) {
        this.title = titile;
    }

    public Integer getId() {

        return id;
    }

    public String getCreateTime() {
        return createTime;
    }

    public String getDate() {
        return date;
    }

    public String getContent() {
        return content;
    }

    public Integer getRawId() {
        return rawId;
    }

    public Integer getAuthor() {
        return author;
    }

    public String getTitle() {
        return title;
    }

}
