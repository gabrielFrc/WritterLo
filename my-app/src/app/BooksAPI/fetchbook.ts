import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import BookData, { PartialBookData } from "../interfaces/mutatebook-data";

import axios from "axios";

const API_URL : string = "http://localhost:8080"; 

const fetchData = async () => {
    try {
        const response = await fetch(API_URL + '/read');
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
};

const mutateData = async (dataM : BookData) => {
    try {
        const response = await fetch(API_URL + '/read', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataM)
        });
        const data = await response.json();
        console.log(data)
        return data;
    } catch (err) {
        console.log(err);
    }
};

export function useMutateData(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: mutateData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['food-data']})
        }
    })

    return mutate;
}

export function useBookData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data
    }
}

const mutatePartialData = async (dataM : PartialBookData) => {
    try {
        // const response = await fetch(API_URL + '/write/edit/' + dataM.id, {
        //     method: "PATCH",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(dataM)
        // });
        // console.log(API_URL + '/write/edit/' + dataM.id)
        // console.log(JSON.stringify(dataM));
        // const data = await response.json();
        // return data;
        axios.patch(API_URL + '/write/edit/' + dataM.id, dataM, { headers: { 'Content-Type': 'application/json'}}).then((r) => {
            return r.data;
        })
    } catch (err) {
        console.log("erro majo");
        console.log(err);
    }
};

export function useMutatePartialData(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: mutatePartialData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['food-data']})
        }
    })

    return mutate;
}