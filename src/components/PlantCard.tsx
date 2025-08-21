import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  Typography,
  Divider,
  Box,
  Modal,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { PlantCardProps } from '../types';

const lightIcons: Record<string, string> = {
  Low: '🌑',
  Medium: '⛅',
  High: '🌞',
};


export const PlantCard: React.FC<PlantCardProps> = ({ plant, onAddToCart, style }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          width: 340,
          height: 500,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          cursor: 'pointer',
          transition: 'transform 0.2s',
          background: '#fff',
          color: '#222',
          margin: '0 16px 32px 16px', // add horizontal and vertical margin for spacing
          flex: '0 1 340px', // ensure 3 per row
          '&:hover': { transform: 'scale(1.03)' },
          ...style,
        }}
        onClick={handleOpen}
      >
        <CardMedia
          component="img"
          image={plant.image}
          alt={plant.name}
          sx={{ objectFit: 'cover', width: '100%', height: 180, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', overflow: 'visible', background: '#fff', color: '#222' }}>
          <Typography variant="h6" fontWeight={600} color="#222" gutterBottom noWrap>
            {plant.name}
          </Typography>
          <Typography variant="body2" color="#555" fontStyle="italic" noWrap>
            {plant.scientificName}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Box display="flex" gap={1} mb={1}>
            <Chip label={plant.careLevel} color={plant.careLevel === 'Easy' ? 'success' : plant.careLevel === 'Moderate' ? 'warning' : 'error'} size="small" />
            <Chip label={plant.size} size="small" color="info" />
          </Box>
          <Box display="flex" gap={1} mb={1}>
            <Chip icon={<WaterDropIcon />} label={plant.water} size="small" color="primary" />
            <Chip icon={<span>{lightIcons[plant.light]}</span>} label={plant.light} size="small" color="secondary" />
          </Box>
          <Box display="flex" gap={1} mb={1} flexWrap="wrap">
            {plant.features.slice(0, 3).map((feature) => (
              <Chip key={feature as string} label={feature} size="small" variant="outlined" color="success" />
            ))}
            {plant.features.length > 3 && (
              <Chip label={`+${plant.features.length - 3} more`} size="small" variant="outlined" color="default" />
            )}
          </Box>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <StarIcon fontSize="small" sx={{ color: '#facc15' }} />
            <Typography variant="body2" fontWeight={500}>{plant.rating}</Typography>
            <Typography variant="caption" color="text.secondary">({plant.reviews} reviews)</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight={700} color="text.primary">
            ${plant.price}
          </Typography>
          <Button
            variant="contained"
            color="success"
            size="medium"
            startIcon={<ShoppingCartIcon />}
            onClick={(e) => { e.stopPropagation(); onAddToCart(plant); }}
            disabled={!plant.inStock}
            sx={{ borderRadius: 2, fontWeight: 500 }}
          >
            Add to Cart
          </Button>
        </CardActions>
        {!plant.inStock && (
          <Box position="absolute" top={0} left={0} width="100%" height="100%" bgcolor="rgba(0,0,0,0.5)" display="flex" alignItems="center" justifyContent="center" borderRadius={3} zIndex={2}>
            <Typography variant="h6" color="white" fontWeight={700}>Out of Stock</Typography>
          </Box>
        )}
        {plant.originalPrice && (
          <Chip label="Sale" color="error" size="small" sx={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }} />
        )}
        <Box position="absolute" top={12} right={12} zIndex={2}>
          <Button variant="outlined" color="inherit" size="small" sx={{ minWidth: 0, p: 1, borderRadius: '50%' }}>
            <FavoriteBorderIcon fontSize="small" />
          </Button>
        </Box>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#fff',
            borderRadius: 4,
            p: { xs: 2, sm: 4 },
            minWidth: 340,
            maxWidth: 440,
            width: '95vw',
            maxHeight: 520,
            overflowY: 'auto',
            border: '1px solid #e5e7eb',
            boxSizing: 'border-box',
          }}
        >
          
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <CardMedia component="img" image={plant.image} alt={plant.name} sx={{ objectFit: 'cover', width: '100%', maxHeight: 180, borderRadius: 2 }} />
            <Typography
              variant="h4"
              fontWeight={900}
              align="center"
              sx={{
                mb: 0.5,
                color: '#222',
                letterSpacing: 0.5,
              }}
            >
              {plant.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" fontStyle="italic" align="center" sx={{ mb: 1 }}>{plant.scientificName}</Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" color="text.secondary" mb={2} align="center" sx={{ fontSize: 16, lineHeight: 1.6 }}>{plant.description}</Typography>
            <Box display="flex" gap={1} mb={1} justifyContent="center">
              <Chip label={plant.careLevel} color={plant.careLevel === 'Easy' ? 'success' : plant.careLevel === 'Moderate' ? 'warning' : 'error'} size="small" />
              <Chip label={plant.size} size="small" color="info" />
            </Box>
            <Box display="flex" gap={1} mb={1} justifyContent="center">
              <Chip icon={<WaterDropIcon />} label={plant.water} size="small" color="primary" />
              <Chip icon={<span>{lightIcons[plant.light]}</span>} label={plant.light} size="small" color="secondary" />
            </Box>
            <Box display="flex" gap={1} mb={1} flexWrap="wrap" justifyContent="center">
              {plant.features.slice(0, 5).map((feature) => (
                <Chip key={feature as string} label={feature} size="small" variant="outlined" color="success" sx={{ fontWeight: 500, fontSize: 13, boxShadow: 'none', background: '#fff' }} />
              ))}
              {plant.features.length > 5 && (
                <Chip label={`+${plant.features.length - 5} more`} size="small" variant="outlined" color="default" sx={{ fontWeight: 500, fontSize: 13, boxShadow: 'none', background: '#fff' }} />
              )}
            </Box>
            <Box display="flex" alignItems="center" gap={1} mb={1} justifyContent="center">
              <StarIcon fontSize="small" sx={{ color: '#facc15' }} />
              <Typography variant="body2" fontWeight={500}>{plant.rating}</Typography>
              <Typography variant="caption" color="text.secondary">({plant.reviews} reviews)</Typography>
            </Box>
            <Typography variant="h6" fontWeight={700} color="text.primary" align="center">
              <span style={{
                color: '#facc15',
                fontWeight: 900,
                fontSize: '2.2rem',
                padding: '2px 12px',
                borderRadius: 8,
                background: 'none',
              }}>
                ${plant.price}
              </span>
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="medium"
              startIcon={<ShoppingCartIcon />}
              onClick={() => { onAddToCart(plant); handleClose(); }}
              disabled={!plant.inStock}
              sx={{
                borderRadius: 2,
                fontWeight: 700,
                mt: 2,
                boxShadow: 'none',
                background: '#22c55e',
                color: '#fff',
                '&:hover': {
                  background: '#16a34a',
                  color: '#fff',
                },
              }}
            >
              Add to Cart
            </Button>
            {!plant.inStock && (
              <Chip
                label="Out of Stock"
                color="error"
                size="small"
                sx={{
                  fontWeight: 700,
                  background: '#fee2e2',
                  color: '#b91c1c',
                  mt: 1,
                  boxShadow: 'none',
                }}
              />
            )}
            {plant.originalPrice && (
              <Chip
                label="Sale"
                color="error"
                size="small"
                sx={{
                  fontWeight: 700,
                  background: '#fef9c3',
                  color: '#b91c1c',
                  mt: 1,
                  boxShadow: 'none',
                }}
              />
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};
