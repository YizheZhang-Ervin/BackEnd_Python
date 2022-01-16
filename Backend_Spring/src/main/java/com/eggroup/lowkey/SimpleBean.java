package com.eggroup.lowkey;

import org.springframework.jmx.export.annotation.ManagedAttribute;
import org.springframework.jmx.export.annotation.ManagedOperation;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Component;

@Component
@ManagedResource(
        objectName = "com.ervin.EZSpring.WebEntrance.controller:type=SimpleBean",
        description = "这里是描述"
)
public class SimpleBean {
    private long id;
    private String name;
    private int age;

    /**
     * 暴露属性
     */
    @ManagedAttribute(description = "这是属性id")
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    /**
     * 暴露属性
     */
    @ManagedAttribute(description = "这是属性name")
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    /**
     * 暴露属性
     */
    @ManagedAttribute(description = "这是属性age")
    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    /**
     * 暴露方法
     */
    @ManagedOperation(description = "这里是操做")
    public String display(){
        return this.toString();
    }

    @Override
    public String toString() {
        return "SimpleBean{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                '}';
    }
}