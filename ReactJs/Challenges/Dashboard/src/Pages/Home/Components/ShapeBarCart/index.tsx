import { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
import { useTrsactionContext } from "../../../../Context/Transaction";
import { Container } from "./styles";




export default function ShapeBarCart() {
    const { transactions_API } = useTrsactionContext()

    const [showDatas, setShowDatas] = useState<boolean>(false)

    const data = [
        {
            name: "Incomes",
            in: transactions_API.income ? transactions_API.income : 0,
            
            fill: '#0BD47C'
        },
        {
            name: "Expenses",
            out: transactions_API.expense ? transactions_API.expense : 0,
            fill: '#F60C13'
        },
    ];

    useEffect(() => {
        if (transactions_API.expense == 0 && transactions_API.income == 0) {
            setShowDatas(false)
        } else {
            setShowDatas(true)
        }
    }, [transactions_API])


    return (
        <Container active={showDatas}>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="in" fill="#0BD47C" />
                <Bar dataKey="out" fill="#F60C13" />
            </BarChart>
        </Container>
    );
}
