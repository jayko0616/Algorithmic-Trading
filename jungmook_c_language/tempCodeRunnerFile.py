import random


num=[]



for i in range(20):
    x = random.randint(-100,100)
    while x in num:
        x = random.randint(-100, 100)
    num.append(x)
    #num.append(random.randint(-100,100))
    
while  True:
    
    if len(num) == 20:
        break
    else:
        continue

print(num)    
num.sort()


sum=1
for a in range(len(num)):
    if(sum==0): break
    for b in range(a+1,len(num)):
        if(sum==0): break
        for c in range(b+1,len(num)):
            sum = num[a] + num[b] + num[c] 
            if sum == 0:
                print(0)
                break
            elif a ==  17:                          
                print(-1)
                sum=0
                break
            else:
                break

             