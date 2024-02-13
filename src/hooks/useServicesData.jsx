import { useQuery } from '@tanstack/react-query';

const useServicesData = () => {
    const { data: serviceData = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['serviceData'],
        queryFn: async () => {
            const res = await fetch('/services.json');
            const data = await res.json();
            return data;
        },
    });

    return [serviceData, loading, refetch];
};

export default useServicesData;