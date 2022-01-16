package com.eggroup.lowkey;

//import com.alibaba.druid.stat.DruidStatManagerFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MonitorController {
//    @GetMapping("/druid/stat")
//    public Object druidStat(){
//        // DruidStatManagerFacade#getDataSourceStatDataList 该方法可以获取所有数据源的监控数据，除此之外 DruidStatManagerFacade 还提供了一些其他方法，你可以按需选择使用。
//        return DruidStatManagerFacade.getInstance().getDataSourceStatDataList();
//    }

    @Autowired
    private SimpleBean simpleBean;

    @GetMapping("/jmx")
    public SimpleBean simpleBean(@RequestParam(required = false) Long id,
                                 @RequestParam(required = false) String name,
                                 @RequestParam(required = false) Integer age
    ){
        if (id != null){
            simpleBean.setId(id);
        }
        if (name != null){
            simpleBean.setName(name);
        }
        if (age != null){
            simpleBean.setAge(age);
        }
        return simpleBean;
    }
}