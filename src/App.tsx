import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { ReceptionInvoice } from "./models/InvoiceReception";
import BasicsSection from "./sections/BasicsSection";
import PaymentInformationSection from "./sections/PaymentInformationSection";

const useStyles = makeStyles({
    formRoot: {
        maxWidth: 1200,
        margin: "auto",
    },
});

function App() {
    const classes = useStyles();

    const {
        register,
        formState: { errors },
        control,
    } = useForm<ReceptionInvoice>({
        mode: "onBlur",
        defaultValues: {
            invoiceNumber: "",
            buyerId: undefined,
            invoiceDate: new Date(),
            dueDate: new Date(),
            bank: undefined,
            ledger: undefined,
            account: undefined,
            kennitala: "",
            comments: "",
        },
    });

    return (
        <div className={classes.formRoot}>

            <Grid container spacing={2}>
                <BasicsSection register={register} errors={errors} control={control} />
                <PaymentInformationSection register={register} errors={errors} />
            </Grid>
        </div>
    );
}

export default App;
