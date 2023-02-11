import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function StepFinish() {
    const {width, height} = useWindowSize()

    return (
        <div className="flex flex-col gap-4 max-w-lg">
            <Confetti
                width={width}
                height={height}
                tweenDuration={1000}
            />

            <span className="text-xl font-semibold">Congratulations!</span>
        </div>
    )
}

export default StepFinish
