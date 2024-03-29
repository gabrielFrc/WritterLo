import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API_URL : string = "http://localhost:8080"; 

const fetchData = async () => {
    try {
        const response = await fetch(API_URL + '/read');
        const data = await response.json();
        // console.log(data)
        return data;
    } catch (err) {
        console.log(err);
    }
};

const mutateData = async (dataM : any) => {
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