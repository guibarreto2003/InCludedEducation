# IncludedEducation Database Dashboard

---

## user_TABLE

```dataview
TABLE
replace(file.name, ".md", "") AS Field,
field_key AS Key,
field_type AS Type,
is_nullable AS Nullable,
is_unique AS Unique,
default_value AS Default,
enum_values AS EnumValues,
field_reference AS Reference,
description AS Description

FROM "docs/database/model"
WHERE field_type
AND contains(file.folder, "user_TABLE")

SORT file.name ASC
```

---

## author_TABLE

```dataview
TABLE
replace(file.name, ".md", "") AS Field,
field_key AS Key,
field_type AS Type,
is_nullable AS Nullable,
is_unique AS Unique,
default_value AS Default,
enum_values AS EnumValues,
field_reference AS Reference,
description AS Description

FROM "docs/database/model"
WHERE field_type
AND contains(file.folder, "author_TABLE")

SORT file.name ASC
```

---

## image_TABLE

```dataview
TABLE
replace(file.name, ".md", "") AS Field,
field_key AS Key,
field_type AS Type,
is_nullable AS Nullable,
is_unique AS Unique,
default_value AS Default,
enum_values AS EnumValues,
field_reference AS Reference,
description AS Description

FROM "docs/database/model"
WHERE field_type
AND contains(file.folder, "image_TABLE")

SORT file.name ASC
```

---

## library_items_TABLE

```dataview
TABLE
replace(file.name, ".md", "") AS Field,
field_key AS Key,
field_type AS Type,
is_nullable AS Nullable,
is_unique AS Unique,
default_value AS Default,
enum_values AS EnumValues,
field_reference AS Reference,
description AS Description

FROM "docs/database/model"
WHERE field_type
AND contains(file.folder, "library_items_TABLE")

SORT file.name ASC
```

---

## material_TABLE

```dataview
TABLE
replace(file.name, ".md", "") AS Field,
field_key AS Key,
field_type AS Type,
is_nullable AS Nullable,
is_unique AS Unique,
default_value AS Default,
enum_values AS EnumValues,
field_reference AS Reference,
description AS Description

FROM "docs/database/model"
WHERE field_type
AND contains(file.folder, "material_TABLE")

SORT file.name ASC
```

---

## review_TABLE

```dataview
TABLE
replace(file.name, ".md", "") AS Field,
field_key AS Key,
field_type AS Type,
is_nullable AS Nullable,
is_unique AS Unique,
default_value AS Default,
enum_values AS EnumValues,
field_reference AS Reference,
description AS Description

FROM "docs/database/model"
WHERE field_type
AND contains(file.folder, "review_TABLE")

SORT file.name ASC
```

---

## subject_TABLE

```dataview
TABLE
replace(file.name, ".md", "") AS Field,
field_key AS Key,
field_type AS Type,
is_nullable AS Nullable,
is_unique AS Unique,
default_value AS Default,
enum_values AS EnumValues,
field_reference AS Reference,
description AS Description

FROM "docs/database/model"
WHERE field_type
AND contains(file.folder, "subject_TABLE")

SORT file.name ASC
```

---

## Constraints

```dataview
TABLE
replace(
    replace(file.folder, "docs/database/model/", ""),
    "/constraints",
    ""
) AS Table,
replace(file.name, ".md", "") AS Constraint,
constraint_type AS Type,
fields AS Fields,
field_reference AS Reference,
expression AS Expression,
description AS Description

FROM "docs/database/model"
WHERE constraint_type
AND contains(file.folder, "constraints")

SORT file.folder ASC, file.name ASC
```
