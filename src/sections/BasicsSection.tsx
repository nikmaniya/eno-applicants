import { Alert, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React from "react";
import { Control, FieldErrors, UseFormRegister } from "react-hook-form";
import ENODateField from "../components/ENODateField";
import ENOTextField from "../components/ENOTextField";
import { ReceptionInvoice } from "../models/InvoiceReception";

export interface BasicsSectionProps {
    register: UseFormRegister<ReceptionInvoice>;
    errors: FieldErrors<ReceptionInvoice>;
    control: Control<ReceptionInvoice, object>
}

export default function BasicsSection({ register, errors, control }: BasicsSectionProps) {
    return (
        <Grid item xs={12}>
            <Grid container spacing={2}>
                <Grid item xs={12} sx={{ pb: 1 }}>
                    <Typography variant="h4">Edit Invoice</Typography>
                </Grid>
                <Grid item xs={6} md={3}>
                    <ENOTextField<ReceptionInvoice>
                        label="Invoice Number"
                        register={register}
                        name={"invoiceNumber"}
                        options={{
                            required: "This field is required",
                        }}
                        error={errors.invoiceNumber}
                        tooltipText="The unique identifier of the invoice"
                    />
                </Grid>
                
                <Grid item xs={12} md={3}>
                    <FormControl fullWidth className="mb-3" style={{ width: "100%" }}>
                        <InputLabel id="nameidlabel" variant="outlined"></InputLabel>
                        <Select
                            labelId="nameidlabel"
                            {...register("buyerId", {
                                required: true,
                            })}
                            defaultValue="-"
                            name="nameid"
                            id="nameid"
                            variant="outlined"
                        >
                            <MenuItem value={"-"} disabled>
                                Seller
                            </MenuItem>
                            <MenuItem value={"10"}>Ten</MenuItem>
                            <MenuItem value={"20"}>Twenty</MenuItem>
                            <MenuItem value={"30"}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    {errors.buyerId && <Alert severity="error">This Field Is Required.</Alert>}
                </Grid>
                
                <Grid item xs={6} md={3}>
                    <ENODateField<ReceptionInvoice>
                        label="Issue Date"
                        control={control}
                        name={"invoiceDate"}
                        
                        renderInput={(params) => <TextField fullWidth {...params} />}
                        options={{
                            required: "This field is required",
                        }}
                        error={errors.invoiceDate}
                    />
                </Grid>
                <Grid item xs={6} md={3}>
                    <ENODateField<ReceptionInvoice>
                        label="Due Date"
                        control={control}
                        name={"dueDate"}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                        options={{
                            required: "This field is required",
                        }}
                        error={errors.dueDate}
                    />
                </Grid>
                
            </Grid>
        </Grid>
    );
}
