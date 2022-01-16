# Deployment  Linux  

### 虚拟环境
pip install virtualenv virtualenvwrapper  
export WORKON_HOME=~/Envs  #设置环境变量  
mkdir -p $WORKON_HOME #创建虚拟环境管理目录  
find / -name virtualenvwrapper.sh #找到virtualenvwrapper.sh的路径  
source 路径 #激活virtualenvwrapper.sh  

mkvirtualenv envXX # 创建虚拟环境  
mkvirtualenv -p python3.4 envXX  # 创建指定解释器的虚拟环境  
workon envXX # 启动虚拟环境 
deactivate # 退出虚拟环境  
rmvirtualenv envXX # 删除虚拟环境  

### 安装库
pip install -r requirements.txt  
  
### uWSGI  
flaskapp.ini放在和app.py同级目录即可  
    
- 安装  
pip install uWSGI  
  
- 用配置文件启动  
uwsgi --ini /home/ervin/flaskweb/flaskapp.ini  
  
- 用命令启动    
uwsgi --http 0.0.0.0:8080 --wsgi-file app.py --callable app --master  
  
### Nginx    
放入/etc/nginx/sites-enabled/flaskapp.conf  
sudo touch flaskapp.conf    
sudo chmod 666 flaskapp.conf   
  
- 安装  
sudo apt-get install nginx  
  
- 启动  
service nginx restart  
  
- 测试  
nginx -t  
  
- 关闭nginx  
nginx  -s quit #网上的关闭命令通常不好用，网站还能上去，我使用的是杀死master进程的方式  
ps -ef | grep nginx   #查看nginx所有的进程，查看master 的进程pid   
kill -quit pid    #杀死master进程的pid，nginx被完全关闭，再次输入网站url ，发现网站已经被关闭  
  