### 종목 코드 가져오기

import win32com.client 
 
# 연결 여부 체크
objCpCybos = win32com.client.Dispatch("CpUtil.CpCybos")
bConnect = objCpCybos.IsConnect
if (bConnect == 0):
    print("PLUS가 정상적으로 연결되지 않음. ")
    exit()
 
# 종목코드 리스트 구하기
objCpCodeMgr = win32com.client.Dispatch("CpUtil.CpCodeMgr")
codeList = objCpCodeMgr.GetStockListByMarket(1) #거래소
codeList2 = objCpCodeMgr.GetStockListByMarket(2) #코스닥
 
 
print("거래소 종목코드", len(codeList))
for i, code in enumerate(codeList):
    secondCode = objCpCodeMgr.GetStockSectionKind(code)
    name = objCpCodeMgr.CodeToName(code)
    stdPrice = objCpCodeMgr.GetStockStdPrice(code)
    print(i, code, secondCode, stdPrice, name)
 
print("코스닥 종목코드", len(codeList2))
for i, code in enumerate(codeList2):
    secondCode = objCpCodeMgr.GetStockSectionKind(code)
    name = objCpCodeMgr.CodeToName(code)
    stdPrice = objCpCodeMgr.GetStockStdPrice(code)
    print(i, code, secondCode, stdPrice, name)
 
print("거래소 + 코스닥 종목코드 ",len(codeList) + len(codeList2))

```

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1dfba20-b385-45cc-b24c-3de8c00ab5af/Untitled.png)

>> 실행결과 겁나 많은 주식 종목들이 뜸 총 3404개.. */