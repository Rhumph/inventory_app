This will be a "Tech Store Inventory App"

Something equivalent to Scorptec, Best Buy, Techtown, JB Hi-Fi, etc.

It shall be called....TECHLANTIS

Products will be stored in a Database called 'techlantis_inventory' 

That DB will have a table with all products from which there will be other entities as outlined below, entities and their fields listed below (fk = Foreign Key from other table).

    
    Each product will have;
        - product_id
        - product_name
        - product_category_id_fk
        - product_family_id_fk
        - brand_id_fk
        - quantity
        - price
        - created_at
        - updated_at

    Entity - Categories;
        - category_id
        - category_name
        - created_at
        - updated_at
        - laptops
        - cameras
        - drones
        - microphones
        - monitors
        - desktop_pc

    Entity - Product Families;
        - family_id
        - family_name
        - created_at
        - updated_at
        - entertainment
        - content_creation
        - computers

    Entity - Brands;
        - brand_id
        - brand_name
        - created_at
        - updated_at
        - Asus
        - DJI
        - Samsung
        - Cannon

Constraints

Can't delete or update categories, product families, or brands tables.

3.1 **Entities and Relationships**:
    - **Products**: Each product has a unique `product_id` and references other entities through foreign keys (`product_category_id_fk`, `product_family_id_fk`, `brand_id_fk`).
    - **Categories**: Represents different product categories. Each category has a unique `category_id` and a `category_name`.
    - **Product Families**: Represents different product families. Each family has a unique `family_id` and a `family_name`.
    - **Brands**: Represents different brands. Each brand has a unique `brand_id` and a `brand_name`.

3.2 **Additional Fields**:
    - **created_at**: Timestamp indicating when the record was created.
    - **updated_at**: Timestamp indicating when the record was last updated.
