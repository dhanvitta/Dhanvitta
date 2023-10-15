export default function Tags({ data }) {
    console.log(data)
    return (
        <div className="w-fit rounded-xl border border-purple-200 py-2 px-6 flex items-center justify-center text-xs text-purple-500 bg-purple-50"> #{data?.name} </div>

    )
}