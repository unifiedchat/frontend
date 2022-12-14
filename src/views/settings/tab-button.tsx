export default function TabButton({text, setSelected, index, tabIndex}: { text: string, setSelected: (index: number) => void, index: number, tabIndex: number }) {
    return (
        <div onClick={() => setSelected(index)}
             className={`flex justify-center items-center rounded-md w-60 h-10 hover:bg-[#29395f] cursor-pointer text-white ${tabIndex == index ? "bg-[#29395f]" : ""}`}>
            {text}
        </div>
    );
}