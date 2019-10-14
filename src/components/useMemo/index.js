const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


const memoizedCallback = useCallback(() => handler(a, b), [a, b]);









