package cn.thoughtworks.school.dao;

import javax.persistence.*;

@Entity
@Table(name = "growthNote")
public class GrowthNote {

    public enum OperationType{CREATE, UPDATE, DELETE}

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int id;

    @Column
    private String createTime;

    @Column
    private String date;

    @Column
    private String content;

    @Column
    private int rawId;

    @Column
    private int author;

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


    public void setId(int id) {
        this.id = id;
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

    public void setRawId(int rawId) {
        this.rawId = rawId;
    }

    public void setAuthor(int author) {
        this.author = author;
    }

    public void setTitle(String titile) {
        this.title = titile;
    }

    public int getId() {

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

    public int getRawId() {
        return rawId;
    }

    public int getAuthor() {
        return author;
    }

    public String getTitle() {
        return title;
    }

}
