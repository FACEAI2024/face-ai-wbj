import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { EChartsOption } from 'echarts';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  mediaRecorder: MediaRecorder;
  isRecording: boolean;
  status_message: any;
  spinner_show: boolean;
  record_time_duration: any;
  video_type: any;
  new_chartOption_HR: EChartsOption = {};
  new_chartOption_BR: EChartsOption = {};
  new_chartOption_SBP: EChartsOption = {};
  new_chartOption_DBP: EChartsOption = {};
  new_chartOption_HRV: EChartsOption = {};


  // URL = "http://127.0.0.1:5000/"
  URL = "https://faceai-ihpc.com/"

  @ViewChild('video') captureElement: ElementRef

  chartOption_HR: EChartsOption = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    series: [
      {
        splitNumber: 4,
        min: 40,
        max: 120,
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '70%'],
        data: [{ value: 0 }],
        detail: {
          valueAnimation: true,
          formatter: '{value} bpm',
          fontSize: 15,
          offsetCenter: [0, '30%']
        },
        axisLine: {
          lineStyle: {
            width: 23,
            color: [
              [0.25, '#FFA500'],
              [0.75, '#59EE76'],
              [1, '#FFA500']
            ]
          }
        },
        radius: '110%',
        splitLine: {
          show: false,
          distance: -60,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'black',
          distance: 16,
          fontSize: 12
        },
      }
    ]
  };

  chartOption_BR: EChartsOption = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    series: [
      {
        splitNumber: 4,
        min: 5,
        max: 25,
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '70%'],
        data: [{ value: 0 }],
        detail: {
          valueAnimation: true,
          formatter: '{value} bpm',
          fontSize: 15,
          offsetCenter: [0, '30%']
        },
        axisLine: {
          lineStyle: {
            width: 23,
            color: [
              [0.25, '#FFA500'],
              [0.75, '#59EE76'],
              [1, '#FFA500']
            ]
          }
        },
        radius: '110%',
        splitLine: {
          show: false,
          distance: -60,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'black',
          distance: 16,
          fontSize: 12
        },
      }
    ]
  };


  chartOption_SBP: EChartsOption = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    series: [
      {
        splitNumber: 4,
        min: 65,
        max: 165,
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '70%'],
        data: [{ value: 0 }],
        detail: {
          valueAnimation: true,
          formatter: '{value} mmHg(SBP)',
          fontSize: 10,
          offsetCenter: [0, '30%']
        },
        axisLine: {
          lineStyle: {
            width: 23,
            color: [
              [0.25, '#FFA500'],
              [0.75, '#59EE76'],
              [1, '#FFA500']
            ]
          }
        },
        radius: '110%',
        splitLine: {
          show: false,
          distance: -60,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'black',
          distance: 16,
          fontSize: 12
        },
      }
    ]
  };


  chartOption_DBP: EChartsOption = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    series: [
      {
        splitNumber: 4,
        min: 45,
        max: 105,
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '70%'],
        data: [{ value: 0 }],
        detail: {
          valueAnimation: true,
          formatter: '{value} mmHg(DBP)',
          fontSize: 10,
          offsetCenter: [0, '30%']
        },
        axisLine: {
          lineStyle: {
            width: 23,
            color: [
              [0.25, '#FFA500'],
              [0.75, '#59EE76'],
              [1, '#FFA500']
            ]
          }
        },
        radius: '110%',
        splitLine: {
          show: false,
          distance: -60,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'black',
          distance: 16,
          fontSize: 12
        },
      }
    ]
  };

  chartOption_HRV: EChartsOption = {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    series: [
      {
        splitNumber: 5,
        min: 0,
        max: 100,
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '70%'],
        data: [{ value: 0 }],
        detail: {
          valueAnimation: true,
          formatter: '{value} ms',
          fontSize: 15,
          offsetCenter: [0, '30%']
        },
        axisLine: {
          lineStyle: {
            width: 23,
            color: [
              [0.2, '#FFA500'],
              [0.75, '#59EE76'],
              [1, '#2dd55b']
            ]
          }
        },
        radius: '110%',
        splitLine: {
          show: false,
          distance: -60,
          length: 30,
          lineStyle: {
            color: '#fff',
            width: 2
          }
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: 'black',
          distance: 16,
          fontSize: 12
        },
      }
    ]
  };

  constructor(private http: HttpClient,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.isRecording = false
    this.spinner_show = false
    this.initialVideo();
  }


  async initialVideo() {
    // const stream = await navigator.mediaDevices.getUserMedia({
    //   video: {
    //     facingMode: 'user'
    //   },
    //   audio: false
    // });
    // this.captureElement.nativeElement.srcObject = stream;
    // const options = { mimeType: this.video_type };
    // this.mediaRecorder = new MediaRecorder(stream, options);

    //////////////// check supported video mineType ////////////
    if (MediaRecorder.isTypeSupported('video/webm')) {
      this.video_type = "video/webm"
    } else {
      this.video_type = "video/mp4"
    }
    console.log("-----------video type-----------")
    console.log(this.video_type)
    //////////////// check supported video mineType end ////////////

    navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: 'user'
      },
      audio: false
    }).then((stream) => {
      this.captureElement.nativeElement.srcObject = stream;
      const options = { mimeType: this.video_type };
      this.mediaRecorder = new MediaRecorder(stream, options);
    })

  }


  ngAfterViewInit(): void {
    this.captureElement.nativeElement.addEventListener('loadedmetadata', () => {
      const videoElement = this.captureElement.nativeElement
      const videoHeight = videoElement.clientHeight
      const playerControlsWidth = videoElement.offsetWidth - videoElement.clientWidth;
      const visibleVideoWidth = videoElement.clientWidth - playerControlsWidth;

      let box: any = document.getElementById('circle-box')
      let box_width = visibleVideoWidth + "px"
      let box_height = videoHeight + "px"
      box.style.width = box_width
      box.style.height = box_height
      this.status_message = "Click button to start measurement"
    });
  }


  async recordVideo() {
    this.record_time_duration = 12
    this.spinner_show = true;
    this.status_message = "capturing video...remaining:" + this.record_time_duration + "s"
    this.isRecording = true;
    this.mediaRecorder.start();
    let chunks: any = [];

    this.new_chartOption_HR = {
      series: [{ data: [{ value: 0 }] }]
    }
    this.new_chartOption_BR = {
      series: [{ data: [{ value: 0 }] }]
    }
    this.new_chartOption_SBP = {
      series: [{ data: [{ value: 0 }] }]
    }
    this.new_chartOption_DBP = {
      series: [{ data: [{ value: 0 }] }]
    }
    this.new_chartOption_HRV = {
      series: [{ data: [{ value: 0 }] }]
    }

    const countdown_timer = setInterval(() => {
      if (this.record_time_duration > 0) {
        this.record_time_duration -= 1
        this.status_message = "capturing video...remaining:" + this.record_time_duration + "s"
      }
    }, 1000)

    setTimeout(() => {
      this.status_message = "running AI model..."
      this.mediaRecorder.stop()
      clearInterval(countdown_timer)
    }, 12000)

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        chunks.push(event.data)
      }
    }

    this.mediaRecorder.onstop = async (event) => {
      const videoBuffer = new Blob(chunks, { type: this.video_type });
      //send video
      this.postVideoToServer(videoBuffer)
    }
  }

  // stopRecord() {
  //   this.isRecording = false;
  //   console.log("stopRecord?????")
  //   this.mediaRecorder.stop();
  //   // this.captureElement.nativeElement.srcObject = null; //camera off 
  // }

  async postVideoToServer(recordedBlobs: any) {
    let headers = { headers: new HttpHeaders({ 'Content-Type': this.video_type }) };

    this.isRecording = false;
    this.spinner_show = false;

    this.http.post(this.URL + 'predict', recordedBlobs, headers)
      .subscribe({
        next: data => {
          let results = JSON.stringify(data)
          let res = JSON.parse(results)
          console.log(data)

          this.new_chartOption_HR = {
            series: [{ data: [{ value: res.hr }] }]
          }
          this.new_chartOption_BR = {
            series: [{ data: [{ value: res.br }] }]
          }
          this.new_chartOption_SBP = {
            series: [{ data: [{ value: res.bp_high }] }]
          }
          this.new_chartOption_DBP = {
            series: [{ data: [{ value: res.bp_low }] }]
          }
          this.new_chartOption_HRV = {
            series: [{ data: [{ value: res.hrv }] }]
          }

          this.status_message = res.msg
          this.changeDetectorRef.detectChanges();
        },
        error: error => {
          console.log("error===================")
          console.log(error)
          this.status_message = "Error: " + error.name
          this.changeDetectorRef.detectChanges();
        }
      })
    // console.log("======postVideoToServer=======")
    // try{
    //   const response = await fetch(this.URL + 'predict', { method: "POST", body: recordedBlobs })
    //   console.log("===========response============")
    //   console.log(response)
    // }catch(e){
    //   console.log("===========error============")
    //   console.log(e)

    // }





  }

}
