import multiprocessing
import paramiko
from time import sleep, strftime
from paramiko_expect import SSHClientInteraction
import numpy as np
import os
from datetime import date
from datetime import datetime
import os.path
from sys import exit
import sys, os
from smtp import smtp
import re
 
#################Mail IDs#################
mail_id = ['surbhi.kumari@ericsson.com']
#################Mail IDs#################
def greet(): 
################################################MME-Full################################################
    def trace_operation(number, ip, user, pwd):
        print('Insdie Function')
        try:
            print('Hello')
            print('#1')
            now = datetime.now()
            start_time_time = now.strftime("%H:%M:%S")
            fmt = '%H-%M-%S'
            curr_time = strftime("%H:%M:%S").replace(':', '-')
            p = multiprocessing.current_process()
            print('Starting:',p.name,p.pid )    
            ssh_client = paramiko.SSHClient()
            ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
            sleep(5)
            #x = ssh_client.connect(node_ip, port = 22, username=user, password=pwd, timeout=100)
            x = ssh_client.connect(ip, port = 22, username = user, password = pwd, timeout = 100)
            interact = SSHClientInteraction(ssh_client, timeout = 10, display = True, buffer_size = 1000000)
            interact.expect(".*#.*", timeout = 180)
            cmd_output_uname = interact.current_output
            #Make Directory
            if not os.path.exists("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"):
                os.mkdir("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\")
    
            file_counter = 1
            with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'w+') as f:
                f.write("#######################"+number+"#######################\n"+cmd_output_uname)
            #Make Directory
            # Check msisdn present or not
            interact.send("epg pgw user-info identifier-type msisdn value "+str(number))
            interact.expect(".*#.*", timeout = 600)
            #interact.expect(".*\(Q\)uit.*", timeout = 600)
            cmd_output_uname = cmd_output_uname+interact.current_output
            #Case 1
    ##        if 'no such msisdn' in cmd_output_uname:
    ##          print('Mail: No such MSISDN found')
        ##        exit(0)
        ##  elif 'mobile-user-information' in cmd_output_uname:
            ##    print('MSISDN Found')
        ##  else:
        ##        print('Mail: '+ cmd_output_uname)
    ##          exit(0)    
            #Case 1
            # Check msisdn present or not
    
            #Fetch IMSI Number
    ##      imsi = re.findall('imsi: (\d+)', cmd_output_uname)
    ##      print('IMSI Number:', imsi[0])
            #Fetch IMSI Number
            if(len(number)<15):
                msisdn=number
                # Check msisdn present or not
                try:
                    interact.send("epg pgw user-info identifier-type msisdn value "+str(number))
                    interact.expect(".*#.*", timeout = 600)
                except Exception as e:
                    smtp.exception_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip,e)
                #interact.expect(".*\(Q\)uit.*", timeout = 600)
                cmd_output_uname = cmd_output_uname+interact.current_output
                with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
                    f.write("#######################"+number+"#######################\n"+cmd_output_uname)
                #Case 1
                if 'no such msisdn' in cmd_output_uname:
                    print('Mail: This MSISDN is not registered')
                    s='No such MSISDN Number registered'
                    smtp.exception_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip,s)
                    exit(0)
                elif 'mobile-user-information' in cmd_output_uname:
                    print('MSISDN Found')
                else:
                    print('Mail: '+ cmd_output_uname)
                    smtp.exception_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip,cmd_output_uname)
                    exit(0)    
                #Case 1
                # Check msisdn present or not
    
                #Fetch IMSI Number
                imsi_number = re.findall('imsi: (\d+)', cmd_output_uname)
                print('IMSI Number:', imsi_number[0])
                imsi=imsi_number[0]
                #Fetch IMSI Number
            elif(len(number)==15):
                imsi=number
                # Check imsi present or not
                try:
                    interact.send("epg pgw user-info identifier-type msisdn value "+str(number))
                    interact.expect(".*#.*", timeout = 600)
                except Exception as e:
                    smtp.exception_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip,str(e))
                #interact.expect(".*\(Q\)uit.*", timeout = 600)
                cmd_output_uname = cmd_output_uname+interact.current_output
                with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
                    f.write("#######################"+number+"#######################\n"+cmd_output_uname)
                #Case 1
                if 'no such imsi' in cmd_output_uname:
                    print('Mail: No such IMSI Number is registered')
                    s='No such IMSI Number is registered'
                    smtp.exception_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip,s)
                    exit(0)
                elif 'mobile-user-information' in cmd_output_uname:
                    print('IMSI Found')
                else:
                    print('Mail: '+ cmd_output_uname)
                    exit(0)    
                #Case 1
                # Check imsi present or not
    
                #Fetch MSISDN Number
                msisdn_number = re.findall('msisdn: (\d+)', cmd_output_uname)
                print('MSISDN Number:', msisdn_number[0])
                msisdn=msisdn_number[0]
                #Fetch MSISDN Number
            trace_start_time = now.strftime("%H:%M:%S") #Trace Start Time
            #send start trace mail
            smtp.start_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip)
            #send start trace mail
            #Control Plane
            interact.send('epg node uetrace start-control-plane-session trace-reference ' + str(number) + ' identifier-type imsi identifier-value ' + str(imsi[0]))
            interact.expect(['.*Trace started.*', '.*already.*'], timeout = 600)
            cmd_output_uname = cmd_output_uname+interact.current_output
            with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
                f.write("#######################"+number+"#######################\n"+cmd_output_uname)
            #Control Plane
    
            #User Plane
            interact.send('epg node uetrace start-user-plane-session trace-reference ' + str(number) + ' identifier-type imsi identifier-value ' + str(imsi[0]))
            interact.expect(['.*Trace UserPlane started.*', '.*already.*'], timeout = 600)
            cmd_output_uname = cmd_output_uname+interact.current_output
            with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
                f.write("#######################"+number+"#######################\n"+cmd_output_uname)
            #User Plane
    
            #Show Session
            interact.send('epg node uetrace show-session')
            interact.expect(".*#.*", timeout = 600)
            cmd_output_uname = cmd_output_uname+interact.current_output
            with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
                f.write("#######################"+number+"#######################\n"+cmd_output_uname)
            #Show Session
            while(1):
                with open(r"E:\Subscriber Trace Enabling Ericsson\Phone.txt", 'r+') as f:
                    stop_num = f.readlines()
                print("---------------------------------running----------------------------")
                if number in stop_num:
                    print("--------------------------stop number found--------------------------")
                    #Stop Control Plane Trace
                    interact.send('epg node uetrace stop-control-plane-session trace-reference '+str(number))
                    interact.expect(".*#.*", timeout = 600)
                    cmd_output_uname = cmd_output_uname+interact.current_output
                    with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
                        f.write("#######################"+number+"#######################\n"+cmd_output_uname)
                    #Stop Control Plane Trace
    
                    #Stop user Plane Trace
                    interact.send('epg node uetrace stop-user-plane-session trace-reference '+str(number))
                    interact.expect(".*#.*", timeout = 600)
                    cmd_output_uname = cmd_output_uname+interact.current_output
                    with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
                        f.write("#######################"+number+"#######################\n"+cmd_output_uname)
                    #Stop user Plane Trace
    
                    #Show Session
                    interact.send('epg node uetrace show-session')
                    interact.expect(".*#.*", timeout = 600)
                    cmd_output_uname = cmd_output_uname+interact.current_output
                    with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
                        f.write("#######################"+number+"#######################\n"+cmd_output_uname)
                    #Show Session
                    break
                sleep(10)
    
            #Save MSISDN Number to sftp the traces
            trace_stop_time = now.strftime("%H:%M:%S")
            with open(r"E:\Subscriber Trace Enabling Ericsson\Output\MSISDN_Trace.txt", 'w+') as f:
                f.write(number+' '+trace_stop_time+' '+trace_start_time)
            #Save MSISDN Number to sftp the traces
            #Send trace stop mail
            smtp.end_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip,"\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling BOT\\Ericsson\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt")   
            #Send trace stop mail
    ##        if not os.path.exists("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"):
    ##            os.mkdir("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\")
    ##
    ##        file_counter = 1
    ##        with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
    ##            f.write("#######################"+number+"#######################\n"+cmd_output_uname)
    ##        smtp.start_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip, "\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt")
    ##        
    ##        interact.send("monitor subscriber imsi "+number)
    ##        interact.expect(".*\(Q\)uit.*", timeout = 600)
    ##        cmd_output_uname = cmd_output_uname + interact.current_output
    ##        print("\n\n\nmonitor function over\n\n\n")
    ##
    ##        interact.send("+++++")
    ##        interact.expect(".*\(Q\)uit.*", timeout = 600)
    ##        print("\n\n\nsend_plus function over\n\n\n")
    ##        cmd_output_uname = cmd_output_uname + interact.current_output
    ##
    ##        interact.send("asxy")
    ##        interact.expect(".*.*", timeout = 600)
    ##        print("\n\n\nasxy function over\n\n\n")
    ##        cmd_output_uname = cmd_output_uname + interact.current_output
    ##
    ##        print("\n\n\nIn send_number\n\n\n")
    ##        x = 19
    ##        interact.send("192633343537545659888991")
    ##        interact.expect(".*TCAP.*", timeout = 600)
    ##        print("\n\n\nsend_number function over\n\n\n")
    ##        cmd_output_uname = cmd_output_uname + interact.current_output
    ##
    ##        with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
    ##            f.write("#######################"+number+"#######################\n"+cmd_output_uname)
    ##
    ##        #file_counter = 1
    ##        while(1):
    ##            try:
    ##                with open(r"E:\Subscriber Trace Enabling Ericsson\Phone.txt", 'r+') as f:
    ##                    phno = f.read()
    ##                if number in phno:
    ##                    #interact.expect(".*.*", timeout = 30)
    ##                    cmd_output_uname = interact.current_output
    ##                    with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
    ##                        f.write(cmd_output_uname+"##############################################\n\n\n")
    ##                    break
    ##                else:
    ##                    interact.expect(".*.*", timeout = 30)
    ##                    cmd_output_uname = interact.current_output
    ##                    with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
    ##                        f.write(cmd_output_uname)
    ##                    print('Still Alive!!!!!!')
    ##                if os.stat("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt").st_size < 21000000 and os.stat("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt").st_size > 15000000:
    ##                    smtp.current_file('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip, "\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt")
    ##                    file_counter += 1
    ##                    with open("\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt", 'a') as f:
    ##                        f.write("")
    ##                sleep(5)
    ##                now = datetime.now()
    ##                if str(datetime.strptime(now.strftime("%H-%M-%S"), fmt)-datetime.strptime(curr_time, fmt)) >= "2-00-00":
    ##                    break
    ##            except Exception as e:
    ##                exc_type, exc_obj, exc_tb = sys.exc_info()
    ##                fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    ##                print('Exception line: ', exc_type, fname, exc_tb.tb_lineno)
    ##                print('In Loop Function Exception')
    ##                print(e)
    ##                now = datetime.now()
    ##                if str(datetime.strptime(now.strftime("%H-%M-%S"), fmt)-datetime.strptime(curr_time, fmt)) >= "2-00-00":
    ##                    break
    ##        sleep(5)
    ##        smtp.end_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip, "\\\\oinnona001-a.int.in.nmc.ericsson.se\\RPA_Bharati$\\NOKIA Subscriber Trace Enabling Ericsson BOT\\Cisco\\"+ number +"\\"+ip.replace('.', '-')+'_'+number+'_'+curr_time+"_file"+str(file_counter)+".txt")
    ##        print('Exiting:',p.name,p.pid )
        except Exception as e:
    ##        exc_type, exc_obj, exc_tb = sys.exc_info()
    ##        fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
    ##        print('Exception line: ', exc_type, fname, exc_tb.tb_lineno)
    ##        print('In Global Function Exception')
    ##        smtp.exception_mail('smtp.int.in.nmc.ericsson.se', 25, mail_id, number, ip, e)
            print(e)
    ##        sleep(2)
    ##        with open(r"E:\Subscriber Trace Enabling Ericsson\Output\Error Numbers IMSI.txt", 'w+') as f:
    ##            arguments = f.read()
    ##            f.write(arguments+' '+'Worker '+number+' '+ip+' '+user+' '+pwd)
    
    def custom_process(worker, phno, ip, username, password):
        print('Custom Process: ', phno, worker)
        try:
            ph = multiprocessing.Process(
                name = worker,
                target = trace_operation,
                args=(phno,ip,username,password))
            print('process start 1')
            ph.start()
            print('process start 2')
        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            print('Exception line: ', exc_type, fname, exc_tb.tb_lineno)
            print(e)
            with open(r"E:\Subscriber Trace Enabling Ericsson\Output\Error Numbers.txt", 'a') as f:
                f.write(ip+':'+number+"\n")
    if __name__ == "__main__":
        try:
            with open("E:\Subscriber Trace Enabling Ericsson\Output\Logs.txt", 'w') as f:
                f.write("")
            processes = []
            with open("E:\Subscriber Trace Enabling Ericsson\Input\Arguments.txt", 'r+') as f:
                lst = f.read()
            print(lst)
            lst = lst.split('\n')[0]
            lst = lst.split(' ')
            lst_len = len(lst)/5
            print(len(lst), lst_len)
            print(lst)
            lst = np.array_split(lst, lst_len)
            print(lst)
            for i in lst:
                print(i[0], i[1], i[2], i[3], i[4])
                ph = custom_process(i[0], i[1], i[2], i[3], i[4])
                processes.append(ph)
            with open("E:\Subscriber Trace Enabling Ericsson\Input\Arguments.txt", 'w+') as f:
                f.write(" ")
    
            #sleep(20)
            with open(r"E:\Subscriber Trace Enabling Ericsson\Output\Error Numbers.txt", 'r+') as f:
                lst = f.read().strip()
            if lst != '':
                lst = lst.split('\n')[0]
                lst = lst.split(' ')
                lst_len = len(lst)/5
                print(len(lst), lst_len)
                print(lst)
                lst = np.array_split(lst, lst_len)
                print(lst)
                for i in lst:
                    print(i[0], i[1], i[2], i[3], i[4])
                    ph = custom_process(i[0], i[1], i[2], i[3], i[4])
                    processes.append(ph)
                with open("E:\Subscriber Trace Enabling Ericsson\Output\Error Numbers.txt", 'w+') as f:
                    f.write(" ")
            #with open("E:\\Subscriber Trace Enabling Ericsson\\ue_trace.txt", 'w+') as f:
                #f.write(cmd_output_uname)
        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            fname = os.path.split(exc_tb.tb_frame.f_code.co_filename)[1]
            print('Exception line: ', exc_type, fname, exc_tb.tb_lineno)
            print('In Mail Function Exceptin')
            with open("E:\Subscriber Trace Enabling Ericsson\Output\Error Logs.txt", 'w+') as f:
                f.write(str(e)+'Exception line: '+str(exc_type)+ fname+ str(exc_tb.tb_lineno))
greet()                
                
                