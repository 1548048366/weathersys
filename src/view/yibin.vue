<template>
  <div>
    <div id="main-box" style="position: absolute;top: 0;left: 0;right: 0;letter-spacing: 0.3vw; height: 100vh;overflow: auto">
      <el-row>
        <el-col :span="24">
          <div class="tempNumber">
            <div class="tempNumber-body">1<sup style="font-size: 0.2em">°C</sup></div>
            <div class="temp-weather">阴</div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="display: flex">
          <div class="airQuality"><i style="background: gray;border-radius: 100%;margin-right: 5vw;font-size: 1.5em
" class="el-icon-partly-cloudy"></i>中度污染</div>
          <div class="airQuality"><i style="background: gray;border-radius: 100%;margin-right: 5vw;font-size: 1.5em
" class="el-icon-heavy-rain"></i>降水概率</div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 4vh">
        <el-col :span="24" style="display: flex">
          <div class="airQuality">
            <i style="background: rgba(34,34,34,0.43);border-radius: 100%;margin-right: 5vw;font-size: 1.5em
"  class="el-icon-cloudy"></i> 今天·阴转多云
          </div>
          <div class="temp-Lower-Num">
            1°/3°
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 4vh">
        <el-col :span="24" style="display: flex">
          <div class="airQuality">
            <i style="background: rgba(34,34,34,0.43);border-radius: 100%;margin-right: 5vw;font-size: 1.5em
"  class="el-icon-cloudy"></i> 明天·多云转雨
          </div>
          <div class="temp-Lower-Num">
            2°/2°
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 4vh">
        <el-col :span="24" style="display: flex">
          <div class="airQuality">
            <i style="background: rgba(34,34,34,0.43);border-radius: 100%;margin-right: 5vw;font-size: 1.5em
"  class="el-icon-cloudy"></i> 后天·小雨
          </div>
          <div class="temp-Lower-Num">
            4°/1°
          </div>
        </el-col>
      </el-row>
      <el-row style="margin-top: 4vh">
        <el-col :span="24" >
          <div class="windForceBorder">
            <div class="windForce">
              <div class="wind-time">00:00</div>
              <div class="wind-temp">3°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-back"></i>4级</div>
            </div>
            <div class="windForce">

              <div class="wind-time">02:00</div>
              <div class="wind-temp">3°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-bottom-left"></i>4级</div>

            </div>
            <div class="windForce">
              <div class="wind-time">04:00</div>
              <div class="wind-temp">3°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-back"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">06:00</div>
              <div class="wind-temp">2°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-back"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">08:00</div>
              <div class="wind-temp">6°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-top"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">10:00</div>
              <div class="wind-temp">6°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-right"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">12:00</div>
              <div class="wind-temp">7°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-bottom-right"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">14:00</div>
              <div class="wind-temp">7°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-top"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">16:00</div>
              <div class="wind-temp">6°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-back"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">18:00</div>
              <div class="wind-temp">4°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-back"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">20:00</div>
              <div class="wind-temp">6°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-right"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">22:00</div>
              <div class="wind-temp">4°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-right"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">24:00</div>
              <div class="wind-temp">3°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-right"></i>4级</div>
            </div>
            <div class="windForce">
              <div class="wind-time">00:00</div>
              <div class="wind-temp">1°</div>
              <div class="wind-icon"><i class="el-icon-cloudy"></i></div>
              <div class="wind-level"><i class="el-icon-top"></i>4级</div>
            </div>
          </div>

        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div class="anotherSmallBox">
            <div class="small-up-box">
              <div class="small-up-box-inside">
                <i class="el-icon-sunrise-1"></i>
                日出 07：52
              </div>
              <div class="small-up-box-inside">
                <i class="el-icon-sunset"></i>
                日落 17：59
              </div>
            </div>
            <div class="small-middle-box">
              <div class="small-middle-box-inside">3级</div>
              <div class="small-middle-box-inside">90%</div>
              <div class="small-middle-box-inside">3°</div>
              <div class="small-middle-box-inside">987hpa</div>
            </div>
            <div class="small-down-box">
              <div class="small-down-box-inside">南北风</div>
              <div class="small-down-box-inside">温度</div>
              <div class="small-down-box-inside">体感</div>
              <div class="small-down-box-inside">气压</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <div class="anotherBox">
            <div class="anotherBox-one">
              <div class="anotherBox-inside">
                <div class="inside-icon">
                  <i class="el-icon-s-help"></i>
                </div>
                <div class="inside-words">适合冬泳</div>
              </div>
              <div class="anotherBox-inside">
                <div class="inside-icon">
                  <i class="el-icon-no-smoking"></i>
                </div>
                <div class="inside-words">不宜吸烟</div></div>
              <div class="anotherBox-inside">
                <div class="inside-icon">
                  <i class="el-icon-sugar"></i>
                </div>
                <div class="inside-words">宜吃糖果</div></div>
            </div>
            <div class="anotherBox-two">
              <div class="anotherBox-inside">
                <div class="inside-icon">
                  <i class="el-icon-moon"></i>
                </div>
                <div class="inside-words">宜赏月看花</div></div>
              <div class="anotherBox-inside">
                <div class="inside-icon">
                  <i class="el-icon-sunny"></i>
                </div>
                <div class="inside-words">不适合赏日</div></div>
              <div class="anotherBox-inside">
                <div class="inside-icon">
                  <i class="el-icon-truck"></i>
                </div>
                <div class="inside-words">不宜搬家</div></div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {
  name: "yibin"
}
</script>

<style scoped>
@import "../assets/css/showPage.css";

</style>
