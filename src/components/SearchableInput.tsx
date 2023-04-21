import React, { useState, useEffect } from 'react';
import useAutocomplete from '@mui/base/useAutocomplete';
import { styled } from '@mui/system';
import { Box, IconButton } from "@mui/material";


import Arrow from '../assets/icons/arrow-down.svg'
import ClearIcon from '../assets/icons/x-close.svg'

interface Props {
    value: string,
    type: "text" | "select",
    icon?: any,
    options: string[],
    searchable: boolean,
    placeholder?: string,
    onChange: Function
}

export default function SearchableInput({
    value,
    type,
    icon,
    options,
    searchable,
    placeholder,
    onChange
}: Props) {
    const {
        getRootProps,
        getInputProps,
        getListboxProps,
        getOptionProps,
        getClearProps,
        getPopupIndicatorProps,
        groupedOptions,
    } = useAutocomplete({
        options: options,
        getOptionLabel: (option) => option,
    });

    useEffect(() => {
        onChange(getInputProps().value)
    }, [getInputProps])


    return (
        <Box className='annie-searchable-input-root'>
            <Box className={
                groupedOptions.length > 0
                    ?
                    type === 'select' ?
                        'annie-searchable-input menu-opened'
                        :
                        value !== "" ?
                            'annie-searchable-input menu-opened'
                            :
                            'annie-searchable-input'
                    :
                    value !== "" && options.indexOf(value) === -1 ?
                        'annie-searchable-input menu-opened'
                        :
                        'annie-searchable-input'
            }
            >
                {
                    icon &&
                    <img className='annie-searchable-input-icon' src={icon} />
                }
                <input placeholder={placeholder} className='annie-searchable-input-input' {...getInputProps()} readOnly={searchable} />
                {
                    value !== "" ?
                        <IconButton
                            onClick={getClearProps().onClick}
                            type="button"
                            className="annie-searchable-input-button-clear"
                        >
                            <img src={ClearIcon} alt='Search' />
                        </IconButton>
                        :
                        type === "select" &&
                        <IconButton
                            onClick={getPopupIndicatorProps().onClick}
                            type="button"
                            className={
                                getRootProps()['aria-owns'] !== null ?
                                    "annie-searchable-input-button-close"
                                    :
                                    "annie-searchable-input-button-open"
                            }
                        >
                            <img src={Arrow} alt='Search' />
                        </IconButton>
                }
            </Box>
            {
                groupedOptions.length > 0 && type === "select" ||
                    groupedOptions.length > 0 && type === "text" && value !== "" ?
                    (
                        <ul className='annie-searchable-input-listbox' {...getListboxProps()}>

                            {(groupedOptions as typeof options).map((option, index) => (
                                <li {...getOptionProps({ option, index })}>{option}</li>
                            ))}
                        </ul>
                    ) :
                    value !== "" && options.indexOf(value) === -1 &&
                    <ul className='annie-searchable-input-listbox'>
                        <li>No result</li>
                    </ul>
            }
        </Box >
    );
}
