export default function useLocalRef<T>(value: T) {
  return useLocalObservable(() => ({ value }));
}
