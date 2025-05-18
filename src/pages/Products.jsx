const Products = () => {
    return (
        <div className="flex flex-col justify-center p-4 bg-[#F3F4F7] rounded shadow-lg">
            <h1 className="mb-4 text-xl font-bold">Products</h1>
            <div className="flex gap-4">
                <div className="A flex flex-col p-3 border rounded">
                    <h2 className="font-bold">Product A</h2>
                    <p>This is a fantastic product A.</p>
                    <button className="w-30 py-2 px-4 mt-4 rounded text-white bg-teal-500">View Details</button>
                </div>
                <div className="B flex flex-col p-3 border rounded">
                    <h2 className="font-bold">Product B</h2>
                    <p>This is a brilliant product B.</p>
                    <button className="w-30 py-2 px-4 mt-4 rounded text-white bg-teal-500">View Details</button>
                </div>
                <div className="C flex flex-col p-3 border rounded">
                    <h2 className="font-bold">Product C</h2>
                    <p>This is a superb product C.</p>
                    <button className="w-30 py-2 px-4 mt-4 rounded text-white bg-teal-500">View Details</button>
                </div>
            </div>
        </div>
    )
}

export default Products;