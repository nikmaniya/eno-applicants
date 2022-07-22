import { Grid, Typography } from "@mui/material";
import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import ENOTextField from "../components/ENOTextField";
import { ReceptionInvoice } from "../models/InvoiceReception";

export interface PaymentInformationSectionProps {
    register: UseFormRegister<ReceptionInvoice>;
    errors: FieldErrors<ReceptionInvoice>;
}

export default function PaymentInformationSection({ register, errors }: PaymentInformationSectionProps) {
    return (
        <Grid item xs={12}>
            <Grid spacing={2} container>
                        <Grid item xs={12} sx={{ pb: 1 }}>
                            <Typography variant="h4">Payment Information</Typography>
                        </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={5}>
                            <ENOTextField<ReceptionInvoice>
                                label="Bank"
                                register={register}
                                name={"bank"}
                                options={{
                                    required: "This field is required",
                                }}
                                error={errors.bank}
                                
                            />
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <ENOTextField<ReceptionInvoice>
                                label="Ledger"
                                register={register}
                                name={"ledger"}
                                options={{
                                    required: "This field is required",
                                }}
                                error={errors.ledger}
                                
                            />
                        </Grid>
                        <Grid item xs={6} md={5}>
                            <ENOTextField<ReceptionInvoice>
                                label="Invoice Number"
                                register={register}
                                name={"invoiceNumber"}
                                options={{
                                    required: "This field is required",
                                }}
                                error={errors.invoiceNumber}
                                
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <ENOTextField<ReceptionInvoice>
                                label="Kennitala"
                                register={register}
                                name={"kennitala"}
                                options={{
                                    required: "This field is required",
                                }}
                                fullWidth
                                error={errors.kennitala}
                                
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <ENOTextField<ReceptionInvoice>
                        label="Comments"
                        register={register}
                        multiline
                        rows={4}
                        name={"comments"}
                        options={{
                            required: "This field is required",
                        }}
                        error={errors.comments}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
}
