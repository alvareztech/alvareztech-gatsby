---
title: "Espresso"
lang: en
draft: true
---

## Lists

```java
onData(withItemContent("item: 60"))
    .onChildView(withId(R.id.item_size))
    .perform(click());
```

```kotlin
onData(withItemContent("item: 60"))
    .onChildView(withId(R.id.item_size))
    .perform(click())
```

### Click

#### ListView

```java
onData(anything()).inAdapterView(withId(android.R.id.list)).atPosition(0)
    .perform(click());
```

#### RecyclerView

```java
onView(ViewMatchers.withId(R.id.recyclerView))
    .perform(RecyclerViewActions.actionOnItemAtPosition(0, click()));
```


## Documentation

[developer.android.com/training/testing/espresso](https://developer.android.com/training/testing/espresso)

## Downloads

[espresso-cheat-sheet-2.1.0.pdf](https://android.github.io/android-test/downloads/espresso-cheat-sheet-2.1.0.pdf)
