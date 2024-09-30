const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `product` model, which we set in `Product.js` as its `modelName` property
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        // This references the `tag` model, which we set in `tag.js` as its `modelName` property
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;


//Per tutor - This is a through-table. Used with tables that have a many-to-many relationship.
// e.g. A many-to-many relationship exists between A and B using table C as junction table