package com.eggroup.lowkey;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class BasicController {
    @RequestMapping(value="/webgl",method= RequestMethod.GET)
    public String getWebgl(){
        return "forward:game.html";
    }
}
