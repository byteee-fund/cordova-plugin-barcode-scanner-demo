/*
 * Copyright (c) [2024] [BSF]
 * [https://byteee.fund]
 * 
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("device ready!");
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("scanButton")
        .addEventListener("click", scan);
    document
        .getElementById("continuousScanButton")
        .addEventListener("click", continuousScan);
    document
        .getElementById("stopScanButton")
        .addEventListener("click", stopScan);

    // document.getElementById("encodeButton").addEventListener("click", encode);
});

// document.addEventListener("wechat.onQrcodeScanned", function () {
//   console.log("onQrcodeScanned!!!");
// }, false);
//
// document.addEventListener("wechat.onAuthFinish", function () {
//   console.log("onAuthFinish!!!");
// }, false);
//
// document.addEventListener("wechat.apiInit", function (event) {
//     console.log("apiInit!!!");
//     console.log(event.result);
//    document.getElementById("apiResult").innerText = event.result;
// }, false);
//
// document.addEventListener(
//   "wechat.onLog",
//   function (message) {
//     console.log(message);
//   },
//   false
// );


function scan() {
    window.BarcodeScanner.scan( {
            mode: 1,
//          desiredFormats: "QR_CODE,UPC_A,UPC_E,EAN_8,EAN_13", // 传递 desiredFormats 以指定扫描的条码格式
            prompt: "请将条形码置于取景框内扫描", // 传递 prompt 以设置扫描时的提示信息
            cameraId: 0, // 传递 cameraId 以指定要使用的摄像头（0 为后置摄像头）
            beepEnabled: true, // 传递 beepEnabled 以控制扫描成功时是否发出声音
            timeout: 10000, // 传递 timeout 以设置扫描的超时时间
            barcodeImageEnabled: true // 传递 barcodeImageEnabled 以控制是否保存扫描到的条形码图像
        },
        function (response) {
            alert(JSON.stringify(response));
        },
        function (error) {
            alert(JSON.stringify(error));
        }
    );
}

function continuousScan() {
    window.BarcodeScanner.scan( {
            mode: 2,
            desiredFormats: "QR_CODE,UPC_A,UPC_E,EAN_8,EAN_13", // 传递 desiredFormats 以指定扫描的条码格式
            prompt: "请将条形码置于取景框内扫描", // 传递 prompt 以设置扫描时的提示信息
            cameraId: 0, // 传递 cameraId 以指定要使用的摄像头（0 为后置摄像头）
            beepEnabled: true, // 传递 beepEnabled 以控制扫描成功时是否发出声音
            y: 0,
            height: 300
        },
        function (response) {
            console.log(JSON.stringify(response));
        },
        function (error) {
            alert(JSON.stringify(error));
        }
    );
}

function stopScan() {
    window.BarcodeScanner.stopScan(
        function (response) {
            alert(JSON.stringify(response));
        },
        function (error) {
            alert(JSON.stringify(error));
        }
    );
}
