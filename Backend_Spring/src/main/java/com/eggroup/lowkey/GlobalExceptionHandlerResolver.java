package com.eggroup.lowkey;

import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

// 全局异常处理类
@ControllerAdvice  // 全局异常切面类+交给IOC容器维护

public class GlobalExceptionHandlerResolver {
    @ExceptionHandler(value=Exception.class)
    @ResponseBody
    public Map<String,Object> exceptionHandler(Exception e){
        Map<String,Object> map = new HashMap<>();
        map.put("code",500);
        map.put("msg","error");
        return map;
    }
}