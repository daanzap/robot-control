namespace aiCaptainRobot {
    let step_time = 200

    function right_forward () {
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
    function turnLeft () {
        left_forward()
        right_backward()
    }
    function right_backward () {
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
    function driveBackwards () {
        left_backward()
        right_backward()
    }
    function left_backward () {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    //% blockId=rightOneStep
    //% block="right one step"
    export function rightOneStep () {
        turnRight()
        basic.pause(step_time)
        all_stop()
    }
    //% blockId=leftOneStep
    //% block="left one step"
    export function leftOneStep () {
        turnLeft()
        basic.pause(step_time)
        all_stop()
    }
    //% blockId=backwardsOneStep
    //% block="backward one step"
    export function backwardOneStep () {
        driveBackwards()
        basic.pause(step_time)
        all_stop()
    }

    function turnRight () {
        right_forward()
        left_backward()
    }
    //% blockId=forwardwardsOneStep
    //% block="forward one step"
    export function forwardOneStep () {
        driveForward()
        basic.pause(step_time)
        all_stop()
    }
    function driveForward () {
        left_forward()
        right_forward()
    }
    function left_forward () {
        pins.digitalWritePin(DigitalPin.P12, 1)
    }
    function all_stop () {
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }

}