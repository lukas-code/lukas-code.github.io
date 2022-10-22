window.SIDEBAR_ITEMS = {"fn":[["empty","Creates an iterator that yields nothing."],["from_fn","Creates a new iterator where each iteration calls the provided closure `F: FnMut() -> Option<T>`."],["from_generator","Creates a new iterator where each iteration calls the provided generator."],["once","Creates an iterator that yields an element exactly once."],["once_with","Creates an iterator that lazily generates a value exactly once by invoking the provided closure."],["repeat","Creates a new iterator that endlessly repeats a single element."],["repeat_with","Creates a new iterator that repeats elements of type `A` endlessly by applying the provided closure, the repeater, `F: FnMut() -> A`."],["successors","Creates a new iterator where each successive item is computed based on the preceding one."],["zip","Converts the arguments to iterators and zips them."]],"struct":[["ArrayChunks","An iterator over `N` elements of the iterator at a time."],["ByRefSized","Like `Iterator::by_ref`, but requiring `Sized` so it can forward generics."],["Chain","An iterator that links two iterators together, in a chain."],["Cloned","An iterator that clones the elements of an underlying iterator."],["Copied","An iterator that copies the elements of an underlying iterator."],["Cycle","An iterator that repeats endlessly."],["Empty","An iterator that yields nothing."],["Enumerate","An iterator that yields the current count and the element during iteration."],["Filter","An iterator that filters the elements of `iter` with `predicate`."],["FilterMap","An iterator that uses `f` to both filter and map elements from `iter`."],["FlatMap","An iterator that maps each element to an iterator, and yields the elements of the produced iterators."],["Flatten","An iterator that flattens one level of nesting in an iterator of things that can be turned into iterators."],["FromFn","An iterator where each iteration calls the provided closure `F: FnMut() -> Option<T>`."],["Fuse","An iterator that yields `None` forever after the underlying iterator yields `None` once."],["Inspect","An iterator that calls a function with a reference to each element before yielding it."],["Intersperse","An iterator adapter that places a separator between all elements."],["IntersperseWith","An iterator adapter that places a separator between all elements."],["Map","An iterator that maps the values of `iter` with `f`."],["MapWhile","An iterator that only accepts elements while `predicate` returns `Some(_)`."],["Once","An iterator that yields an element exactly once."],["OnceWith","An iterator that yields a single element of type `A` by applying the provided closure `F: FnOnce() -> A`."],["Peekable","An iterator with a `peek()` that returns an optional reference to the next element."],["Repeat","An iterator that repeats an element endlessly."],["RepeatWith","An iterator that repeats elements of type `A` endlessly by applying the provided closure `F: FnMut() -> A`."],["Rev","A double-ended iterator with the direction inverted."],["Scan","An iterator to maintain state while iterating another iterator."],["Skip","An iterator that skips over `n` elements of `iter`."],["SkipWhile","An iterator that rejects elements while `predicate` returns `true`."],["StepBy","An iterator for stepping iterators by a custom amount."],["Successors","An new iterator where each successive item is computed based on the preceding one."],["Take","An iterator that only iterates over the first `n` iterations of `iter`."],["TakeWhile","An iterator that only accepts elements while `predicate` returns `true`."],["Zip","An iterator that iterates two other iterators simultaneously."]],"trait":[["DoubleEndedIterator","An iterator able to yield elements from both ends."],["ExactSizeIterator","An iterator that knows its exact length."],["Extend","Extend a collection with the contents of an iterator."],["FromIterator","Conversion from an [`Iterator`]."],["FusedIterator","An iterator that always continues to yield `None` when exhausted."],["IntoIterator","Conversion into an [`Iterator`]."],["Iterator","An interface for dealing with iterators."],["Product","Trait to represent types that can be created by multiplying elements of an iterator."],["Step","Objects that have a notion of successor and predecessor operations."],["Sum","Trait to represent types that can be created by summing up an iterator."],["TrustedLen","An iterator that reports an accurate length using size_hint."],["TrustedStep","A type that upholds all invariants of [`Step`]."]]};