import {NextPage} from "next";
import {useEffect, useState} from "react";
import {getMe} from "@services/ApiService";
import {useRouter} from "next/router";
import StepSignUp from "@views/register/steps/SignUp";
import AccountSetup from "@views/register/steps/AccountSetup";
import Finish from "@views/register/steps/Finish";

export default function Register() {
    const router = useRouter();
    const [steps, setSteps] = useState([
        {
            completed: false,
            title: "Sign Up",
            description: "Create your account",
            content: <StepSignUp/>
        },
        {
            completed: false,
            title: "Account Setup",
            description: "Add your personal information",
            content: <AccountSetup/>
        },
        {
            completed: false,
            title: "Finish",
            description: "You have successfully registered.",
            content: <Finish/>
        }
    ]);
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        getMe().then(() => {
            router.push("/");
        }).catch(() => {
        });
    }, []);

    return (
        <div className="container px-20 pt-12">
            <div className="flex gap-x-8 items-center">
                {steps.map((step, index) => (
                    <div className="flex items-center" key={index}>
                        <div
                            className={`w-6 h-6 mr-2 text-white rounded-full flex justify-center items-center ${step.completed && "bg-blue-400" || (activeStep == index ? "bg-blue-600" : "bg-blue-200")}`}>
                            <span>{index + 1}</span>
                        </div>

                        <span className={
                            `text-base font-semibold ${step.completed || activeStep == index ? "text-black" : "text-blue-200"}`
                        }>{step.title}</span>
                    </div>
                ))}
            </div>

            <div className="flex flex-col mt-12">
                <h1 className="text-3xl font-bold">{steps[activeStep].title}</h1>
                <p className="text-gray-500 mt-2">{steps[activeStep].description}</p>

                <div className="mt-6">
                    {steps[activeStep].content}
                </div>

                <div className="flex justify-end space-x-6 mt-4 lg:mt-12">
                    {activeStep > 0 &&  activeStep !== 2 && (
                        <button
                            onClick={() => {
                                const step = steps.find((step, index) => index == activeStep - 1);
                                if (step) {
                                    step.completed = false;
                                    setSteps(steps);
                                }
                                setActiveStep(activeStep - 1);
                            }}
                            className="flex items-center text-blue-400 hover:underline">
                            <span>Back</span>
                        </button>
                    )}

                    <button
                        onClick={() => {
                            if (activeStep == steps.length - 1) return;
                            setActiveStep(activeStep + 1);
                            const step = steps.find((step, index) => index == activeStep);
                            if (step) {
                                step.completed = true;
                                setSteps(steps);
                            }
                        }}
                        className="flex items-center gap-x-2 text-white bg-blue-400 hover:bg-blue-500 rounded-md px-4 py-2">
                        <span>Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

Register.getLayout = (page: NextPage) => page;
Register.authGuard = false;

