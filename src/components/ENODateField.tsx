import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker, { DatePickerProps } from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Control, Controller, FieldValues } from "react-hook-form";
import { ENOFieldOverrides, ENOFieldProps } from "./EnoFieldUtils";
import ENOTooltip from "./ENOTooltip";


export interface ENODateFieldProps<T extends FieldValues>
    extends Omit<ENOFieldProps<T>, "register">,
        Omit<DatePickerProps, ENOFieldOverrides | "value" | "onChange"> {
    control: Control<T, object>;
}

const useStyles = makeStyles({
    fullWidth: {
        width: "100%",
    },
});

export default function ENODateField<T extends FieldValues>({
    name,
    control,
    options,
    error,
    tooltipText,
    ...rest
}: ENODateFieldProps<T>) {
    const classes = useStyles();

    return (
        <ENOTooltip text={tooltipText}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                    name={name}
                    control={control}
                    render={({ field: { ref, ...fieldRest } }) => (
                        <DatePicker className={classes.fullWidth} {...fieldRest} {...rest} />
                    )}
                />
            </LocalizationProvider>
        </ENOTooltip>
    );
}
