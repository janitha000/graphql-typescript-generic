import { mount } from "enzyme";
import useInput from "./useInput";
import React from 'react';
import { act } from "@testing-library/react";

describe('useInput Hook', () => {
    let results: any;
    const renderHook = () => {
        const HookWrapper: React.FC = () => {
            results = useInput('test')
            return null;
        }

        mount(<HookWrapper />)
        return results;
    }

    it('should have default value with shared function', () => {
        renderHook()
        expect(results.value).toEqual('test')
    })


    it('should have default value', () => {
        let globalVal;
        const HookWrapper: React.FC = () => {
            let { value } = useInput('test')
            globalVal = value
            return null
        }

        mount(<HookWrapper />)
        expect(globalVal).toEqual('test')
    })

    it('should set the value', () => {
        renderHook();
        act(() => {
            results.setValue('test2')
        })
        expect(results.value).toEqual('test2')
    })

    it('should reset the value', () => {
        renderHook();
        act(() => {
            results.reset()
        })
        expect(results.value).toEqual('')
    })


})